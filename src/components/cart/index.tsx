import React, {useEffect, useState} from 'react'
// styles
import s from './cart.module.scss'
// Link
import Link from 'next/link'
// interface
import {Product} from "@/interfaces"
interface Props{
    data: Product
}

const cart = ({data}: Props) => {
    const {title,price,description,id} = data;
  return (
    <>
        <div style={{padding:10, border:2,borderBlockColor:"#f00"}}>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{price}</div>
        <Link href={`/products/${id}`}>Detail</Link>
    </>
  )
}

export default cart
