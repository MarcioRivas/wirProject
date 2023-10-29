import { apiMercadolibre } from '@/config'
import useAxiosClient from '@/libs/useAxiosClient'

const useMercadolibreService = () => {
    const axiosClient = useAxiosClient(apiMercadolibre)

    const getPhones = () => {
        return axiosClient.get(`/sites/MLU/search?q=Iphone%2015`)
    }

    return { getPhones }
}

export default useMercadolibreService
