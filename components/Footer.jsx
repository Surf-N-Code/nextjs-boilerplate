import Link from 'next/link';
import React from 'react';
import Email from '@/components/Email';

const Footer = () => {
  return (
    <>
      <Email />

      <footer className="flex flex-col md:flex-row flex-grow m-10 lg:m-[62px] h-[130px]">
        <div className="flex flex-col">
          <p className="font-semibold text-lg lg:text-2xl">Diltheymedia</p>
          <span className="font-extralight text-gray-600 text-xs lg:text-base">
            Copyright © 2023 Diltheymedia. All Rights Reserved
          </span>
        </div>
        <div className="mt-4 md:ml-auto font-medium text-xs lg:text-lg flex gap-4 justify-between">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policies</Link>
          <Link href="/contractors">Contact us</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
