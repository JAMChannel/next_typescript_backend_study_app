import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>そのページは存在しません
      <Link href="/">ホームに戻る</Link>
    </div>
  )
}
