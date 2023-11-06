'use client'

import { apiMercadolibre, ebayToken, meliToken } from '@/config'
import axios from 'axios'


const useAxiosClient = (apiHost: string) => {
    const token = apiHost === apiMercadolibre ? meliToken : ebayToken

    const instance = axios.create({
        baseURL: apiHost,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    })

    instance.interceptors.request.use(
        async (request: any) => {
            if (!request.headers.Authorization) {
                request.headers.Authorization = `Bearer ${token}`
            }
            return request
        },
        (error: any) => Promise.reject(error)
    )

    return instance
}

export default useAxiosClient
