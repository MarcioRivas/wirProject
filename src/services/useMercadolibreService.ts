// import { apiMercadolibre } from '@/config'
// import useAxiosClient from '@/libs/useAxiosClient'
import { MOCKED_MELI_RESPONSE } from '@/mockedData'
import { MeliItem } from '@/models/meli'

export interface MeliResponse {
    site_id: string
    paging: {
        total: number
        offset: number
        limit: number
        primary_results: number
    }
    results: MeliItem[]
}

const useMercadolibreService = () => {
    // const axiosClient = useAxiosClient(apiMercadolibre)

    const getPhones = () => {
        // TODO: remove next line comment
        // return axiosClient.get<MeliResponse>(`/sites/MLU/search?q=Iphone%2015&category=MLA1051`)
        return MOCKED_MELI_RESPONSE
    }

    return { getPhones }
}

export default useMercadolibreService
