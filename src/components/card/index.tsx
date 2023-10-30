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
        </div>
    </>
  )
}

export default card
