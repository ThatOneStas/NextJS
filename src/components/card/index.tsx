import React from 'react'
// import styles
import style from "./card.module.css"
// import "./index.css"
interface Props{
  key: any
  data: {
    title: string
    description: string
  }
  num: number
}

const card = (props: Props) => {
  const {title,description} = props.data
  return (
    <>
        <div className={style.card}>
            <h2>{title}</h2>
            <p className={style.text}>
                {description}
            </p>
            <h1>{props.num}</h1>
        </div>
    </>
  )
}

export default card
