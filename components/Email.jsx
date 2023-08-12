'use client';
import React from 'react';
import NewsletterSignup from '@/components/newsletterSignup';

const Email = () => {
  const [email, setEmail] = React.useState('');
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="bg-[#2e654f] text-white lg:pr-[62px] py-12 flex flex-col md:flex-row gap-4 justify-around items-center mt-10">
      <p className="text-left text-xl px-6 lg:ml-[62px] lg:mr-20">
        Voluptate dolore laborum deserunt cupidatat nostrud. Laborum duis id
        exercitation nulla elit est excepteur ad enim
      </p>
      <div className="bg-white rounded-full py-2 px-3 mx-5 mt-6 md:mt-0 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 stroke-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none ml-2 text-black w-[220px]"
            onChange={handleEmailInput}
          />
          <NewsletterSignup email={email} />
        </div>
      </div>
    </div>
  );
};

export default Email;
