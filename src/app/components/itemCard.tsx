import { Item } from "@/types";
import { Text, Badge, Stack, Img } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    const router = useRouter();
  return (
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      width={300}
      height={400}
      p={4}
      m={2}
      position='relative'
      maxWidth={["100%", "48%", "30%"]}
      _hover={{ bg: "gray.100" }}
      onClick={() => router.push(item.itemUrl)}
      cursor='pointer'
    >
      <Img src={item.platform === 'Ebay' ? "/ebayLogo.png" : '/mercadolibreLogo.png'} position='absolute' top='5px' left='5px' width='30px'/>
      <Stack height="140px" justifyContent="center" alignItems="center">
        <img
          alt={item.name}
          src={item.productPhotoUrl}
          style={{ height: "inherit" }}
        />
      </Stack>
      <Text fontSize="xl">{item.name}</Text>
      <Text>{item.description}</Text>
      <Text fontSize="lg">
        $
        {item.price.toLocaleString("es", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
      <Text>By: {item.seller}</Text>
      <Badge colorScheme="green">Seller score: {item.sellerStars}</Badge>
    </Stack>
  );
};

export default ItemCard;
