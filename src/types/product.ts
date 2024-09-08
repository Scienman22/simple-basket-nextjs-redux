export interface productType {
    id: number, 
    name: string, 
    price: number
}

export interface basketItemType extends productType {
    quantity: number
}