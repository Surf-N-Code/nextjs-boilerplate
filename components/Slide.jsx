import React from 'react';

const Slide = ({ text, name, title, imgPath }) => {
  return (
    <div className="mx-4 rounded-3xl bg-[#eee] border-2 border-gray-300 p-6 grid gap-14">
      <p className="italic text-xs sm:text-lg font-light">"{text}"</p>
      <div className="flex gap-2 items-center">
        <img
          src={`../assets/${imgPath}`}
          alt=""
          className="object-cover rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm pt-1">{name}</span>
          <span className="font-normal text-xs pb-1 -mt-2">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
