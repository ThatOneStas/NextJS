import React from 'react'
import style from "./header.module.css"
import Link from 'next/link'
// redux
import {useDispatch, useSelector} from "react-redux"
import { clearCart } from '@/store/features/cart'

const header = () => {
  const COUNTER = useSelector((state: any) => state.counter.value)
  const CART_ITEMS = useSelector((state: any)=> state.cart.items)
  const dispatch = useDispatch()
  return (
    <header className={style.header}>
      <nav>
        <li style={{padding:10}}><Link href={'/'}>Home</Link></li>
        <li style={{padding:10}}><Link href={'/news'}>News</Link></li>
        <li style={{padding:10}}><Link href={'/products'}>Products</Link></li>
        <li style={{padding:10}}><Link href={'/redux'}>Redux</Link></li>
        <li style={{padding:10}}><Link href={'/wishlist'}>Wish List</Link></li>
        <li style={{padding:10}}><Link href={'/cart'}>Cart</Link></li>

      </nav>
      <p>{CART_ITEMS.length > 0 ? CART_ITEMS.length : "корзина пуста"}</p>
      <div onClick={()=>{dispatch(clearCart())}} className={style.header__clear}>Clear cart</div>
    </header>
  )
}

export default header
