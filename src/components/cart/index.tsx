import React, {useEffect, useState} from 'react'
// styles
import s from './cart.module.scss'
// Link
import Link from 'next/link'
// redux
import {useDispatch} from "react-redux"
import { addItemToCart } from '@/store/features/cart'


// interface
import {Product} from "@/interfaces"
interface Props{
    data: Product
}

const cart = ({data}: Props) => {
    const {title,price,description,id} = data;
    // initialization
    const dispatch = useDispatch()
  return (
    <>
        <div className={s.card}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>{price}</div>
          <Link href={`/products/${title}?id=${id}`}>Detail</Link>
          <div onClick={()=>{dispatch(addItemToCart(id))}} className={s.card__btn}>Add to cart</div>
        </div>
    </>
  )
}

export default cart
