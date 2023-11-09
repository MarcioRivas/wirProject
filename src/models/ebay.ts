export interface EbayItem {
    itemId: string
    title: string
    itemWebUrl: string
    price: {
        value: string
        currency: string
    }
    seller: {
        username: string
        feedbackScore: number
    }
    image: {
        imageUrl: string
    }
}
