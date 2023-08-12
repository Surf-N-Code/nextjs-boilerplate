import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  console.log('Middleware');
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('user im middleware', user?.id);
  // if user is signed in and the current path is /login or /signup redirect the user to /dashboard
  if (
    user &&
    (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup')
  ) {
    console.log(
      'user is signed in and the current path is /login or /signup redirect the user to /dashboard'
    );
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // if user is not signed in and the current path is /dashboard redirect the user to /login
  if (!user && req.nextUrl.pathname === '/dashboard') {
    console.log(
      'user is not signed in and the current path is /dashboard redirect the user to /login'
    );
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/account', '/dashboard', '/login'],
};
