'use client' // This is a directive to use client-side rendering

import React from 'react'
import { useState } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  console.log('ClientComponentが実行されました')
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
