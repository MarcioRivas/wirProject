const NOT_FOUND_VARIABLE = 'Not found'

export const apiMercadolibre = process.env.NEXT_PUBLIC_API_MERCADOLIBRE || NOT_FOUND_VARIABLE

export const apiEbay = process.env.NEXT_PUBLIC_API_EBAY || 'https://api.ebay.com'

export const meliToken = process.env.NEXT_PUBLIC_MELI_TOKEN || NOT_FOUND_VARIABLE

export const ebayToken =
    process.env.NEXT_PUBLIC_EBAY_TOKEN ||
    'v^1.1#i^1#p^3#f^0#I^3#r^1#t^Ul4xMF84OkFCQTBENzUyNTQ1NTRDRkZCMDc5NzRGMDMwQjM3N0Y3XzNfMSNFXjI2MA=='

export const apiTranslate = process.env.NEXT_PUBLIC_API_TRANSLATE || 'https://libretranslate.com'
