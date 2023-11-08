import React, {useEffect, useState} from 'react'
// styles
import s from './products.module.scss'
// cart
import Cart from "@/components/cart"
// interface
import { Product } from '@/interfaces'


const getAllProducts = async() => {
    return await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{return json;})
}

const index = () => {
        // states
        const [products, setProducts] = useState<Product[] | []>()
        // load
        useEffect(()=>{
            getAllProducts().then((data: Product[])=>{
                setProducts(data)
            })
        },[])
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

export default index
