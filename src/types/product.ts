export interface productType {
    id: number
    title: string
    description: string
    category: string
    stock: number
    price: number
    thumbnail: string
}

export interface basketItemType extends productType {
    quantity: number
}