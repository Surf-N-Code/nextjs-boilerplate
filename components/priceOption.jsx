import React from 'react';
import clsx from 'clsx';

const PriceOption = ({
  price,
  isMain,
  title,
  features,
  buttonText,
  buttonColor,
  hasBestValue,
  className,
}) => (
  <div
    className={clsx(
      {
        'bg-[#d634e] text-white': hasBestValue,
        'bg-[#f5f5f5]': !hasBestValue,
        'scale-110': isMain,
      },
      'shadow-base flex flex-col bg-[#2d634e] justify-between items-center rounded-2xl p-10 relative',
      className
    )}
  >
    {hasBestValue && (
      <div className="border-4 rounded-3xl bg-[#2d634e] border-white w-fit px-6 py-2 absolute -top-6">
        <span>BEST VALUE</span>
      </div>
    )}

    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-sm font-semibold text-center px-4 pb-2 tracking-[0.2rem]">
        {title}
      </span>
      <p className="text-center text-4xl font-medium px-2">{price} / Month</p>
      <div className="flex flex-col gap-4 text-left font-normal py-6">
        {features.map((name) => (
          <div className="flex" key={name}>
            <svg
              width="16"
              height="11"
              className="mt-1.5"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.23529L5.84615 10L15 1"
                stroke={hasBestValue ? 'white' : 'black'}
                strokeWidth="1.11355"
              />
            </svg>
            <p className="ml-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
    <a
      href="https://pic2quote.lemonsqueezy.com/checkout?cart=20363031-3c25-4403-99eb-cc1188ef7094"
      target="_blank"
      rel="noreferrer noopener"
    >
      <button
        className={clsx(
          {
            'bg-white hover:bg-black hover:text-white': buttonColor === 'white',
            'bg-black text-white hover:bg-green-600 hover:text-white':
              buttonColor === 'black',
          },
          'text-[#2d634e] md:w-[160px]  w-[200px] rounded-full font-normal my-6 mx-auto py-3 px-6'
        )}
      >
        {buttonText}
      </button>
    </a>
  </div>
);

export default PriceOption;
