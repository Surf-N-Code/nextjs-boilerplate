import supabase from 'lib/supabaseServer';

export default async function Welcome() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <p>
      Thank you for signing up. Please check your email at: {user.email}, to
      verify your e-mail address!
    </p>
  );
}
