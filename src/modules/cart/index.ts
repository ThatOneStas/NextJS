import { BASE_URL } from "@/constants";

export class Cart{
    baseURL: string = BASE_URL
    constructor(){}
    public createPrettyData(data: any[]){
        // create unique IDs
        // @ts-ignore
        let uniqueProductId = [...new Set(data)]
        let formatProductsData : {}[] = []
        // create new array products
        uniqueProductId.map((e: number)=>{
            let counter = 0
            data.map((item)=>{
                if(e==item){
                    counter += 1
                }
            })
            // create frame
            formatProductsData.push({
                id: e,
                quantity: counter})
        })
        return formatProductsData
    }
}