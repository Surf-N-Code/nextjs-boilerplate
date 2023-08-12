import Link from 'next/link';
import supabaseServer from '@/lib/supabaseServer';
import LogoutButton from '@/components/LogoutButton';

const MenuSignIn = async () => {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log('nav user', user);

  return user ? (
    <Link
      href="/dashboard"
      className="hover:underline hover:underline-offset-2"
    >
      Dashbaord
    </Link>
  ) : (
    <Link href="/login" className="hover:underline hover:underline-offset-2">
      Log In
    </Link>
  );
};

export default MenuSignIn;
