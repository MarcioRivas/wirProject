import { EbayItem } from '@/models/ebay'
import { MeliItem } from '@/models/meli'
import useEbayService from '@/services/useEbayService'
import useMercadolibreService from '@/services/useMercadolibreService'
import useTranslateService from '@/services/useTranslateService'
import { Item } from '@/types'

function convertEbayToItem(ebayObjects: EbayItem[]): Item[] {
    const items: Item[] = ebayObjects.map((ebayObj, index) => {
        return {
            id: index + 1, // Assuming you want to use a 1-based index
            price: parseFloat(ebayObj.price.value) * 40,
            name: ebayObj.title,
            description: '', // You might need to fill this with appropriate values from eBay object
            seller: ebayObj.seller.username,
            sellerStars: ebayObj.seller.feedbackScore,
            productPhotoUrl: ebayObj.image.imageUrl,
            itemUrl: ebayObj.itemWebUrl,
            platform: 'Ebay',
        }
    })
    return items
}

const convertMeliToItem = (products: MeliItem[], prevIndex: number): Item[] => {
    return products.map((product, index) => {
        // You will need to extract the relevant data from the Product object
        // and map it to the Item interface here.
        const item: Item = {
            id: index + prevIndex, // Assuming the product ID can be converted to a number
            price: product.price,
            name: product.title,
            description: '', // You need to fill in the description based on the product data
            seller: product.seller.username, // You need to fill in the seller information based on the product data
            sellerStars: +(Math.random() * 5).toPrecision(2), // You need to fill in the seller stars/rating based on the product data
            productPhotoUrl: product.thumbnail,
            itemUrl: product.permalink,
            platform: 'Mercado Libre',
        }
        return item
    })
}

export const usePhones = () => {
    // const { translate } = useTranslateService()
    const { getPhones: getEbayPhones } = useEbayService()
    const { getPhones: getMeliPhones } = useMercadolibreService()

    const getCommonModel = async (): Promise<Item[]> => {
        const ebayPhones = await getEbayPhones()
        const meliPhones = await getMeliPhones()
        const ebayItems = convertEbayToItem(ebayPhones.data.itemSummaries)
        const meliItems = convertMeliToItem(meliPhones.results, ebayItems.length + 1)

        return [...ebayItems, ...meliItems]
    }

    return { getCommonModel }
}
