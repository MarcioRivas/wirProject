import { apiEbay } from '@/config'
import useAxiosClient from '@/libs/useAxiosClient'
import { EbayObject } from '@/types'

interface EbayResponse {
    itemSummaries: EbayObject[]
}

const useEbayService = () => {
    const axiosClient = useAxiosClient(apiEbay)

    const getPhones = () => {
        return axiosClient.get<EbayResponse>(`buy/browse/v1/item_summary/search?q=iphone%2015&category_ids=9355`, { headers: { 'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US' } })
    }

    return { getPhones }
}

export default useEbayService
