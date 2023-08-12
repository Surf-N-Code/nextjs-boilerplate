'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

const MobileNav = ({ className }) => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`cursor-pointer flex justify-between items-center ${className}`}
    >
      <Link href="/">
        <Logo />
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={clsx({ hidden: open }, 'w-6 h-6')}
        onClick={toggleNav}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={toggleNav}
        className={clsx({ hidden: !open }, 'w-6 h-6 relative')}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <ul
        className={clsx(
          { hidden: !open },
          'absolute py-4 flex flex-col right-10 top-16 shadow-xl border border-gray-100 rounded-2xl z-50 bg-white'
        )}
        onClick={toggleNav}
      >
        <li className="hover:bg-brand hover:text-white">
          <Link href="#pricing" className="flex py-2 px-8">
            Pricing
          </Link>
        </li>
        <li className="hover:bg-brand hover:text-white">
          <Link href="#faq" className="flex py-2 px-8">
            FAQ
          </Link>
        </li>
        <li className="hover:bg-brand hover:text-white">
          <Link href="/blog" className="flex py-2 px-8">
            Blog
          </Link>
        </li>
        <li className="hover:bg-brand hover:text-white">
          <Link href="/team" className="flex py-2 px-8">
            About Us
          </Link>
        </li>
        <li className="hover:bg-brand hover:text-white">
          <Link href="/contact" className="flex py-2 px-8">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
