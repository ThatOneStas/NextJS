import {useEffect, useMemo} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from '@/components/breadcrumbs/breadcrumbs.module.scss'
import icon_home from '@/assets/img/Home.svg'
import icon_arrow from '@/assets/img/breadcrumbs-arrow.svg.svg'
import { useRouter } from 'next/router'

const Breadcrumbs = () => {
    // init
    const router = useRouter()
    // on load
    // const breadCrumbs = useMemo(()=>{
        
    // })
    console.log(router)
  return (
    <>
    <ul className={s.bc}>
        <li>
            <Link href={`/`}>
                <Image width={20} height={20} src={icon_home} alt=''></Image>
            </Link>
        </li>
        <li>
            <Image className={s.bc__icon} width={10} height={10} src={icon_arrow} alt=''></Image>
            <Link href={`/wishlist`}>Wishlist</Link>
        </li>
    </ul>
    </>
  )
}

export default Breadcrumbs
