import React from 'react'

// 正しい型定義
interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = params
  return {
    title: `ブログ記事ID: ${id}`,
    description: `ブログ記事ID: ${id}の記事です`,
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
