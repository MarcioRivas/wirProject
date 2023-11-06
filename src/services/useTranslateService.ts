import { apiTranslate } from '@/config'
import useAxiosClient from '@/libs/useAxiosClient'

const useTranslateService = () => {
    const axiosClient = useAxiosClient(apiTranslate)

    const translate = (text: string) => {
        return axiosClient.post(`/translate`, { 
            q: text,
            source: "auto",
            target: "es",
            format: "text",
            api_key: ""
        })
    }

    return { translate }
}

export default useTranslateService
