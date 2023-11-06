import React from 'react'
import s from './banner.module.css'
interface Props {
    title: string
    description: string
    reverseProps: any
}

const banner = ({title,description,reverseProps}:Props) => {
    return (
        <>
            <div className={s.banner}>
                <h1>{title}</h1>
                <p>
                    {description}
                    <button onClick={() => {reverseProps("test")}}>Alert</button>
                </p>
            </div>
        </>
    )
}

export default banner
