import React from 'react'
import style from "./header.module.css"
import Link from 'next/link'

const header = () => {
  return (
    <header className={style.header}>
      Header
      <nav>
        <li style={{padding:10}}><Link href={'/'}>Home</Link></li>
        <li style={{padding:10}}><Link href={'/news'}>News</Link></li>
        <li style={{padding:10}}><Link href={'/products'}>Products</Link></li>
      </nav>
    </header>
  )
}

export default header
