import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
// styles
import s from "./Single.module.scss"
// module
import { Products } from '@/modules/server/products'

const getAllProducts = async() => {
    return await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{return json;})
}

const SingleProduct = () => {
    // init 
    const Product = new Products()
    // states
    const [product, setProduct] = useState<any>();
    const router = useRouter()
    const {slug,id} = router.query;
    // load
    useEffect(()=>{
      slug && Product.getData(`/posts/${id}`).then((data) => {
        setProduct(data)
      })
    }, [slug])
  return (
    <div>
        Single {slug}
        <h1>{product?.body}</h1>
    </div>
  )
}

export default SingleProduct
