import React from 'react'
import ClientComponent from '@/components/ClientComponent'
import Link from 'next/link'

export default function ServerComponent() {
  console.log("server componentが実行されました")
  return (
    <div>
      Server
      <ClientComponent />
      <Link href="/about">About</Link>
    </div>
  )
}
