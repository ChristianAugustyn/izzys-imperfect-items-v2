import { IGatsbyImageData } from "gatsby-plugin-image"

export interface Product {
    id: string
    name: string
    imgUrl: string
    price: number
    quantity: number
    type: string
    sale: number | null
    size: string | null
    collection: string
    imgNode?: IGatsbyImageData
}