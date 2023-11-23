export interface MeliItem {
    id: string
    site_id: string
    title: string
    seller: {
        id: number
        username: string
        power_seller_status: null | any // You can replace 'any' with the actual type
        car_dealer: boolean
        real_estate_agency: boolean
        tags: string[]
    }
    price: number
    currency_id: string
    available_quantity: number
    sold_quantity: number
    buying_mode: string
    listing_type_id: string
    stop_time: string
    condition: string
    permalink: string
    thumbnail: string
    accepts_mercadopago: boolean
    installments: {
        quantity: number
        amount: number
        rate: number
        currency_id: string
    }
    address: {
        state_id: string
        state_name: string
        city_id: string
        city_name: string
    }
    shipping: {
        free_shipping: boolean
        mode: string
        tags: string[]
        logistic_type: string
        store_pick_up: boolean
    }
    seller_address: {
        country: {
            id: string
            name: string
        }
        state: {
            id: string
            name: string
        }
        city: {
            id: string
            name: string
        }
        latitude: string
        longitude: string
    }
    attributes: ProductAttribute[]
    differential_pricing: {
        id: number
    }
    original_price: null | any // You can replace 'any' with the actual type
    category_id: string
    official_store_id: null | any // You can replace 'any' with the actual type
    catalog_product_id: string
    tags: string[]
    catalog_listing: boolean
}

interface ProductAttribute {
    values: {
        source: number
        id: string
        name: string
        struct: null | any // You can replace 'any' with the actual type
    }[]
    attribute_group_id: string
    attribute_group_name: string
    id: string
    value_id: string
    value_name: string
    value_struct: null | any // You can replace 'any' with the actual type
    source: number
    name: string
}
