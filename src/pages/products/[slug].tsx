import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
// styles
import s from "./Single.module.scss"
// module
import { Products } from '@/modules/server/products'

interface Props{
  data:{
    user_id: number,
    id: number,
    title: string,
    body: string
  }
}

const SingleProduct = ({data}:Props) => {
    // states
    const [product, setProduct] = useState<any>(data);
  return (
    <div>
        Single {product?.title}
        <h1>{product?.body}</h1>
    </div>
  )
}

// SSR
export async function getServerSideProps(ctx: any) {
  const Products_data = new Products()
  const {id} = ctx.query;
  const data = await Products_data.getData(`/posts/${id}`)
  // console.log("__data:", data)
  return { props: {data} }
}

export default SingleProduct
