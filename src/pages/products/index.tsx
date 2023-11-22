import React, {useEffect, useState} from 'react'
// styles
import s from './products.module.scss'
// cart
import Cart from "@/components/cart"
// interface
import { Product } from '@/interfaces'
// modules 
import { Products } from '@/modules/server/products'


const getAllProducts = async() => {
    return await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{return json;})
}

interface Props {
    prods: Product[]
}

const index = ({prods}:Props) => {
        // init
        const Products_data = new Products()
        // states
        const [products] = useState<Product[] | []>(prods)
  return (
    <>
        <div className={s.products}>
            {
                (products ? products?.map((product: Product)=>{
                    return <Cart key={product.id} data={product}></Cart>
                }): <div>Not found</div>)
            }
        </div>
    </>
  )
}

// SSR
export async function getServerSideProps() {
    // Fetch data from external API
    const Products_data = new Products()
    const data = await Products_data.getData("posts")
    // Pass data to the page via props
    return { props: {prods: data } }
}
export default index;
