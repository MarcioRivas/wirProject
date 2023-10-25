'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import { theme } from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider resetCSS theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
