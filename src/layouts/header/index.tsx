import React from 'react'
import style from "./header.module.css"
import Link from 'next/link'
// redux
import { useSelector } from 'react-redux'

const header = () => {
  const COUNTER = useSelector((state: any) => state.counter.value)
  const CART_ITEMS = useSelector((state: any)=> state.cart.items)
  return (
    <header className={style.header}>
      Header
      <nav>
        <li style={{padding:10}}><Link href={'/'}>Home</Link></li>
        <li style={{padding:10}}><Link href={'/news'}>News</Link></li>
        <li style={{padding:10}}><Link href={'/products'}>Products</Link></li>
        <li style={{padding:10}}><Link href={'/redux'}>Redux</Link></li>
      </nav>
      <p>{CART_ITEMS.length}</p>
    </header>

  )
}

export default header
