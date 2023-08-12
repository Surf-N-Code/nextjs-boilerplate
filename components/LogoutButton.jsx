'use client';

import { useRouter, usePathname } from 'next/navigation';
import supabaseBrowser from '@/lib/supabaseBrowser';

export default function LogoutButton() {
  const router = useRouter();
  const pathName = usePathname();
  const supabase = supabaseBrowser();

  const signOut = async () => {
    await supabase.auth.signOut();
    console.log('signed out');
    if (pathName !== '/') {
      router.push('/');
    } else {
      router.refresh();
    }
  };

  return (
    <button className="" onClick={signOut}>
      Sign Out
    </button>
  );
}
