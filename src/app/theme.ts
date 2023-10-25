import { extendTheme } from '@chakra-ui/react'

export const scrollbarStyles = {
    '&::-webkit-scrollbar': {
        width: '6px',
    },
    '&::-webkit-scrollbar-track': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#f8971d',
        borderRadius: '24px',
    },
}

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

export const theme = extendTheme({ colors })
