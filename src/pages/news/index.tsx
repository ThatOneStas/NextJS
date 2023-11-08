import React from 'react'
import Link from 'next/link'
import Card from '@/components/card'

const index = () => {
  return <div>
      <Link href="/">Головна</Link>
      <Card data={{title: "Test 3",
    description: "Lorem 3"}} num={5} key={1}/>
    </div>
   
}

export default index
