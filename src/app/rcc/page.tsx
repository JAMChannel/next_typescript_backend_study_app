'use client' // This is a directive to use client-side rendering

import React from 'react'
import { useRouter } from 'next/navigation'

export default function ClientComponent() {
  const router = useRouter()
  console.log('ClientComponentが実行されました')
  return (
    <div>
      Client
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  )
}
