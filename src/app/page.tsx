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
    Select,
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
            <Flex gap="3" justifyContent="space-around">
                <Flex gap={5} width="300px">
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
                </Flex>
                <Flex gap={5} width="300px" alignItems="center">
                    <Text whiteSpace="nowrap">Color filter</Text>
                    <Select placeholder="Select color">
                        <Box as="option" value="white" style={{backgroundColor: 'white'}}>White</Box>
                        <Box as="option" value="black" style={{backgroundColor: 'black', color: 'white'}}>Black</Box>
                        <Box as="option" value="red" style={{backgroundColor: 'red'}}>Red</Box>
                        <Box as="option" value="blue" style={{backgroundColor: 'blue'}}>Blue</Box>
                        <Box as="option" value="starlight" style={{backgroundColor: 'lightblue'}}>Starlight</Box>
                        <Box as="option" value="green" style={{backgroundColor: 'green'}}>Green</Box>
                    </Select>
                </Flex>
                <Flex gap={5} width="300px" alignItems="center">
                    <Text whiteSpace="nowrap">Memory size</Text>
                    <Select placeholder="Select memory size">
                        <option value="16gb">16gb</option>
                        <option value="32gb">32gb</option>
                        <option value="64gb">64gb</option>
                        <option value="128gb">128gb</option>
                        <option value="256gb">256gb</option>
                        <option value="512gb">512gb</option>
                        <option value="1024gb">1024gb</option>
                    </Select>
                </Flex>                {
                /* TODO: Add more filters, price, memory. */}
                <Flex gap={5} width="300px" alignItems="center">
                    <Text whiteSpace="nowrap">Price range</Text>
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
