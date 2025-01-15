
import type { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get('token')

  if (!cookie) {
    return redirect("/")
  }
 
}