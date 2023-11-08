export interface Product {
    title: string
    description: string
    price: number
    id: number
    category: string
    image: string
    rating:{
        count: number
        rate: number
    }
}