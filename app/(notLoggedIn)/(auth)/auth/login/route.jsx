import supabaseServer from '@/lib/supabaseServer';

export async function POST(req, res) {
  const supabase = supabaseServer();
  if (req.method !== 'POST')
    return new Response(null, { status: 404, statusText: 'Not Found' });

  const { email, password } = await req.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
    });
  return new Response(JSON.stringify({ user: data }));
}
