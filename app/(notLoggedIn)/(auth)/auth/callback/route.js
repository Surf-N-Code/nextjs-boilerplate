import { createRouteHandlerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const supabase = createRouteHandlerSupabaseClient({ cookies });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  console.log('code', code);
  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL('/dashboard', req.url));
}
