import React from 'react'

// 正しい型定義
interface PageProps {
  params: {
    id: string
  }
}

export default async function page({ params }: PageProps) {
  console.log(params)
  const { id } = params
  return (
    <div>
      ブログID: { id }
    </div>
  )
}
