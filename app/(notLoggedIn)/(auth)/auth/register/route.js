import supabaseServer from '@/lib/supabaseServer';

export async function POST(req, res) {
  if (req.method !== 'POST')
    return new Response(null, { status: 404, statusText: 'Not Found' });

  const supabase = supabaseServer();

  const { firstname, lastname, email, password, accounttype } =
    await req.json();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        accounttype,
        firstname,
        lastname,
      },
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });

  console.log('error', error);
  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify({ user: data }));
}
