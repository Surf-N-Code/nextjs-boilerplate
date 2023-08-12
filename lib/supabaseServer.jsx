'use server';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async () => {
  const cookieStore = cookies();
  return createServerComponentSupabaseClient({
    cookies: () => cookieStore,
  });
};

// import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { cache } from 'react';

// export const supabase = () => {
//   const cookieStore = cookies();
//   const headerStore = headers();
//
//   return createServerComponentSupabaseClient({
//     cookies: () => cookieStore,
//     headers: () => headerStore,
//   });
// };

//
// export const createServerClient = cache(() => {
//   const cookieStore = cookies();
//   return createServerComponentSupabaseClient({
//     cookies: () => cookieStore,
//   });
// });
//
// export async function getSession() {
//   const supabase = createServerSupabaseClient();
//   try {
//     const {
//       data: { session },
//     } = await supabase.auth.getSession();
//     return session;
//   } catch (error) {
//     console.error('Error:', error);
//     return null;
//   }
// }
//
// export default createServerClient();
