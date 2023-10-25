import { Item } from '@/types'
import { Box, Text, Badge } from '@chakra-ui/react'

interface ItemCardProps {
    item: Item
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            m={2}
            maxWidth={['100%', '48%', '30%']}
            _hover={{ bg: 'gray.100' }}
        >
            <Text fontSize="xl">{item.name}</Text>
            <Text>{item.description}</Text>
            <Text fontSize="lg">${item.price}</Text>
            <Text>By: {item.seller}</Text>
            <Badge colorScheme="green">Stars: {item.sellerStars}</Badge>
        </Box>
    )
}

export default ItemCard
