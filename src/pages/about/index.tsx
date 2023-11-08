import React from 'react'
import Link from 'next/link'
import Card from '@/components/card'

const index = () => {
  return <div>
      <Link href="/">Головна</Link>
      <Card title="Test Props" description='Lorem Ipsun'/>
    </div>
  
}

export default index
