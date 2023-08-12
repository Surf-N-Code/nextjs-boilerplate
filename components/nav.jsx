import Link from 'next/link';
import { Logo } from '@/components/Logo';
import MenuSignInOut from '@/components/menuSignInOut';
import clsx from 'clsx';
import MobileNav from '@/components/mobileNav';
// import MobileNav from '@/components/mobileNav';

async function Nav() {
  return (
    <header className="top-0 inset-x-0 m-6">
      <div className="justify-between hidden lg:flex">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex justify-end items-center gap-4 font-medium text-brand">
          <Link
            href="#pricing"
            className="hover:underline hover:underline-offset-2"
          >
            Pricing
          </Link>
          <div className="border-l-2 border-brand w-1 h-[20px]"></div>
          <Link
            href="#faq"
            className="hover:underline hover:underline-offset-2"
          >
            FAQ
          </Link>
          <div className="border-l-2 border-brand w-1 h-[20px]"></div>
          <Link
            href="/blog"
            className="hover:underline hover:underline-offset-2"
          >
            Blog
          </Link>
          <div className="border-l-2 border-brand w-1 h-[20px]"></div>
          <Link
            href="/team"
            className="hover:underline hover:underline-offset-2"
          >
            About us
          </Link>
          <div className="border-l-2 border-brand w-1 h-[20px]"></div>
          <Link
            href="/contact"
            className="hover:underline hover:underline-offset-2"
          >
            Contact us
          </Link>
          <div className="border-l-2 border-brand w-1 h-[20px]"></div>
          <MenuSignInOut />
        </div>
      </div>

      <MobileNav className="lg:hidden block" />
    </header>
  );
}
export default Nav;
