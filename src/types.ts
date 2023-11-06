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

export interface EbayObject {
    itemId: string;
    title: string;
    itemWebUrl: string;
    price: {
        value: string;
        currency: string;
    };
    seller: {
        username: string;
        feedbackScore: number;
    };
    image: {
        imageUrl: string;
    };
}

