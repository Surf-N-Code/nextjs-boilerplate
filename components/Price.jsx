'use client';

import React, { useEffect, useState } from 'react';
import PriceOption from '@/components/priceOption';
import clsx from 'clsx';

const Price = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeTab, setActiveTab] = useState(3);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    });
  }, []);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="w-full px-6 md:px-12 mb-[5rem] bg-[#fefefe]" id="pricing">
      <div className="flex lg:gap-6 items-center md:mb-[3rem] mb-1 mt-12">
        <p className="hidden md:block py-1 px-4 text-4xl font-medium">
          Pricing Table
        </p>
        <p className="md:hidden py-1 text-xm md:text-4xl font-medium self-start">
          Pricing
        </p>
        <div className="shadow-base flex-grow h-0.5 mx-3 ml-8 rounded-sm bg-[#2d634e]"></div>
      </div>

      <div
        className={clsx(
          { flex: !isDesktop, hidden: isDesktop },
          'flex bg-[#efefef] w-full p-1.5 mb-12 rounded-3xl'
        )}
      >
        <button
          className={`p-2 w-full ${
            activeTab === 1
              ? 'bg-[#2d634e] rounded-3xl font-medium text-base text-white'
              : 'text-[#2d634e] text-base font-medium'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Basic
        </button>
        <button
          className={`p-2 w-full ${
            activeTab === 2
              ? 'bg-[#2d634e] rounded-3xl font-medium text-base text-white'
              : 'text-[#2d634e] text-base font-medium'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Advanced
        </button>
        <button
          className={`p-2 w-full ${
            activeTab === 3
              ? 'bg-[#2d634e] rounded-3xl font-medium text-base text-white'
              : 'text-[#2d634e] text-base font-medium'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Pro
        </button>
      </div>

      <div className="flex gap-12 justify-center flex-wrap lg:flex-nowrap lg:my-24 my-8">
        <PriceOption
          hasBestValue={false}
          title="FREE PLAN"
          price="$0.00"
          features={[
            'AI Analysis and Advice',
            'Daily Limited Questions',
            'Basic AI Logic(GPT 3.5)',
            'Free Plan Forever',
          ]}
          buttonColor="black"
          buttonText="Access Beta"
          className={clsx({
            flex: activeTab === 1 || isDesktop,
            hidden: activeTab !== 1 && !isDesktop,
          })}
        />

        <PriceOption
          hasBestValue={true}
          isMain={true}
          title="PRO PLAN"
          price="$19.99"
          features={[
            'AI Analysis',
            'CSR And Sales Review',
            'PRO Journal',
            'Photo Diagnosis',
            'Unlimited Questions',
            'Access To Published',
            'Local Customer Issues',
          ]}
          buttonColor="white"
          buttonText="Go Pro"
          className={clsx({
            flex: activeTab === 3 || isDesktop,
            hidden: activeTab !== 3 && !isDesktop,
          })}
        />

        <PriceOption
          hasBestValue={false}
          title="ADVANCED PLAN"
          price="$4.99"
          features={[
            'AI Analysis',
            'Photo Diagnosis',
            '5x more Questions',
            'Basic AI Logic(GPT 3.5)',
            'Access to our Local',
            'Contractor Support',
          ]}
          buttonColor="black"
          buttonText="Go Advanced"
          className={clsx({
            flex: activeTab === 2 || isDesktop,
            hidden: activeTab !== 2 && !isDesktop,
          })}
        />
      </div>
    </div>
  );
};

export default Price;
