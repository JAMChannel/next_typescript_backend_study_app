import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
// ページリクエストのみに実行 ( image.jpgなどのドットは含まない)
if (!request.nextUrl.pathname.includes('.')) {
console.log('ミドルウェアのテスト')
} return NextResponse.next() // リクエストを次の処理へ進める
}

export const config = {
  matcher: '/blog/:path*',
}