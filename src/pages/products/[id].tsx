import React, {useState} from 'react'
import { useRouter } from 'next/router'
// styles
import s from "./Single.module.scss"

const getAllProducts = async() => {
    return await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{return json;})
}

const SingleProduct = () => {
    // states
    const [product, setProduct] = useState<any>();
    const router = useRouter()
    const {id} = router.query
  return (
    <div>
        Single {id}
    </div>
  )
}

export default SingleProduct
