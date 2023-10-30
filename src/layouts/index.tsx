import React from 'react'
// layouts
import Header from './header'
import Footer from './footer'
interface Props{
  children: any
}

const Layouts = ({children}: Props) => {
  return (
    <>
    <Header/>
      {children}
    <Footer/>
    </>
  )
}

export default Layouts
