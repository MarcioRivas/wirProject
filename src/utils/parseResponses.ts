import useEbayService from '@/services/useEbayService'
import useMercadolibreService from '@/services/useMercadolibreService'
import useTranslateService from '@/services/useTranslateService';
import { EbayObject, Item } from '@/types'

function convertEbayToItem(ebayObjects: EbayObject[]): Item[] {
    const items: Item[] = ebayObjects.map((ebayObj, index) => {
        return {
            id: index + 1, // Assuming you want to use a 1-based index
            price: parseFloat(ebayObj.price.value)*40,
            name: ebayObj.title,
            description: "", // You might need to fill this with appropriate values from eBay object
            seller: ebayObj.seller.username,
            sellerStars: ebayObj.seller.feedbackScore,
            productPhotoUrl: ebayObj.image.imageUrl,
            itemUrl: ebayObj.itemWebUrl,
            platform: "Ebay"
        };
    });
    return items;
}

export const usePhones = () => {
    const { translate } = useTranslateService();
    const { getPhones: getEbayPhones } = useEbayService();
    const { getPhones: getMLPhones } = useMercadolibreService();

    const getCommonModel = async (): Promise<Item[]> => {
        const ebayPhones = await getEbayPhones();
        console.log(ebayPhones.data.itemSummaries);
        const ebayItems = convertEbayToItem(ebayPhones.data.itemSummaries);

        // for (let i = 0; i < ebayItems.length; i++) {
        //     await new Promise<void>((resolve) => {
        //         setTimeout(async () => {
        //             const translatedName = await translate(ebayItems[i].name);
        //             ebayItems[i].name = translatedName.data.translatedText;
        //             resolve();
        //         }, 10000); 
        //     });
        // }

        // const mlPhones = await getMLPhones();
        return [...ebayItems];
    };

    return { getCommonModel };
};

