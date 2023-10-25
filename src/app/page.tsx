'use client'

import { Text, Box, Input, InputGroup, InputLeftElement, Stack, Flex } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import ItemCard from './components/itemCard'
import { items } from '@/types'

export default function Home() {
    const [searchInput, setSearchInput] = useState('')

    return (
        <Stack gap="10">
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
            <Flex gap="10" flexWrap="wrap" overflow="auto">
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </Flex>
        </Stack>
    )
}
