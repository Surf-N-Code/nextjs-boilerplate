import Link from 'next/link';
import supabaseServer from '@/lib/supabaseServer';
import { Logo } from '@/components/Logo';

const Nav = async () => {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log('nav user', user);

  return (
    <header className="top-0 inset-x-0 m-6">
      <div className="flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex justify-end items-center gap-6 font-medium">
          {user && (
            <div className="flex flex-col font-light">
              <div className="">
                {user.user_metadata.firstName} {user.user_metadata.lastName}
              </div>
              <div className="text-gray-500 text-xs">{user.email}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
