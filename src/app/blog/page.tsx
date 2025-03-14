import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "ブログ記事一覧です",
};

// ダミーデータ
const posts = [
  { id: 1, title: '記事1' },
  { id: 2, title: '記事2' },
  { id: 3, title: '記事3' },
]

// 3秒待機
async function fetchPosts(){
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒待機
  // throw new Error('エラーが発生しました');
  return posts;
  }

export default async function BlogPage() {
  const posts = await fetchPosts();
  return (
    <div>
      <h1>BlogPage</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
