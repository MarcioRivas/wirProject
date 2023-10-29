'use client'

import {
    Text,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Flex,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import ItemCard from './components/itemCard'
import { Item } from '@/types'
import { getCommonModel } from '@/utils/parseResponses'

export default function Home() {
    const [fetchedItems, setFetchedItems] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const getItems = async () => {
            const items = await getCommonModel()
            setFetchedItems(items)
        }
        getItems()
    }, [])

    const matchedItems = fetchedItems.filter(
        item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.description.toLowerCase().includes(searchInput.toLowerCase())
    )

    return (
        <Stack gap="10">
            <Flex justifyContent="space-between">
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                        placeholder="Search..."
                        variant="filled"
                        _focus={{ borderColor: 'orange.300' }}
                        width="400px"
                    />
                </InputGroup>
                {/* TODO: Add more filters, price, color, memory. */}
                <Flex gap={5} width="300px">
                    <Text>Price range</Text>
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Flex>
            </Flex>
            <Flex gap="10" flexWrap="wrap" overflow="auto">
                {matchedItems.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </Flex>
        </Stack>
    )
}
