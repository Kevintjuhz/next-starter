import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname === '/page-pattern') {
    return NextResponse.redirect(new URL('page-pattern/home', request.url));
  }
}

export const config = {
  matcher: ['/page-pattern'],
};
