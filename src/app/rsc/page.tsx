import React from 'react'
import ClientComponent from '@/components/ClientComponent'
export default function ServerComponent() {
  console.log("server componentが実行されました")
  return (
    <div>
      Server
      <ClientComponent />
    </div>
  )
}
