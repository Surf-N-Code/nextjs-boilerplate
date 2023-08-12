'use client';

import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Expandible = ({ title, children }) => {
  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div
        onClick={() => setDrop(!drop)}
        className="shadow-base bg-[#eee] my-4 py-4 px-4 rounded-xl w-full"
      >
        <div className="flex justify-between items-center hover:cursor-pointer">
          <p onClick={handleDrop} className="text-base font-medium">
            {title}
          </p>
          <div>
            {!drop ? (
              <RiArrowDropDownLine size={40} />
            ) : (
              <RiArrowDropUpLine size={40} />
            )}
          </div>
        </div>
        <p className={!drop ? 'hidden m-0' : 'text-sm font-light mt-2'}>
          {children}
        </p>
      </div>
    </>
  );
};

export default Expandible;
