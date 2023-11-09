export type PlataformFilter = 'Both' | 'Ebay' | 'Mercado Libre'

export interface Item {
    id: number
    price: number
    name: string
    description: string
    seller: string
    sellerStars: number
    productPhotoUrl: string
    itemUrl: string
    platform: PlataformFilter
}
