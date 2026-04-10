import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const loggedIn = request.cookies.get('loggedIn')?.value;

  const { pathname } = request.nextUrl;

  // allow these paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/login'
  ) {
    return NextResponse.next();
  }

  if (loggedIn !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}