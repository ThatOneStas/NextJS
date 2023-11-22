import React from 'react'
import s from "@/pages/wishlist/wishlist.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'

const index = () => {
  return (
    <>
    <main className={`${s.wishlist} ${s.container}`}>
        <div className={`${s.wishlist__breadcrumbs}`}>
            <Breadcrumbs></Breadcrumbs>
        </div>
    </main>
    </>
  )
}

export default index
