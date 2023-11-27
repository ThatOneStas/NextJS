import {useMemo} from 'react'
import s from "./index.module.scss"
// redux
import {useDispatch, useSelector} from "react-redux"
// module
import { Cart } from "@/modules/cart"

const cart = () => {
    // init
    const cart = new Cart()
    // redux
    const CART_ITEMS = useSelector((state: any)=> state.cart.items)
    const CART_PRODUCTS = useMemo(()=>{
        return cart.createPrettyData(CART_ITEMS)
    },CART_ITEMS)
  return (
    <>
        <main className={s.cart}>
            <h2>Cart</h2>
            {
                CART_PRODUCTS.map((item:any)=>{
                    return (
                        <div key={item.id}>
                            <h2>{item.id}</h2>
                            <p>{item.quantity}</p>
                        </div>
                    )
                })
            }
        </main>
    </>
  )
}

export default cart
