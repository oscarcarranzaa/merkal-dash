import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const token = request.cookies.get('merkToken')
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.KEY_TOKEN_SU))
    return NextResponse.next()
  } catch (err) {
    console.log(err)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
export const config = {
  matcher: ['/enterprises/:path*', '/']
}
