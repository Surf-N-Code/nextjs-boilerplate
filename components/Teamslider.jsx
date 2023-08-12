'use client';

import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'tailwindcss/tailwind.css';

const Teamslider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Custom dot JSX
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // "active" is provided by the library to check if the dot is currently active or not.

    const dotStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      margin: '20px 5px -20px 5px',
      cursor: 'pointer',
      background: active ? '#2e654f' : '#d9d9d9',
    };

    return (
      <button
        style={dotStyle}
        className={active ? 'active-dot' : 'inactive-dot'}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <div className="w-full relative lg:hidden">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        slidesToSlide={1}
        partialVisible="right"
        showDots={true}
        renderDotsOutside={true} // Set to false to render dots inside the Carousel
        customDot={<CustomDot />}
      >
        <div className="bg-white mx-auto border-gray-500 border-2 w-full rounded-3xl max-w-sm">
          <img
            src="../assets/carp.jpg"
            alt="carpenter doing his work"
            className="rounded-t-3xl"
          />
          {/* text */}
          <div className="text-left py-6 p-4 grid gap-2">
            <span className="text-gray-700">6 min read</span>
            <p className="text-lg font-normal lg:text-2xl">
              Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
              Intercom Alternatives
            </p>
            <article className="text-sm lg:text-md">
              We've taken affordable Intercom alternatives to the 14-days test.
              Check out which 5 tools are the best.
            </article>
            <div className="ml-auto my-1">
              <AiOutlineArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="bg-white mx-auto border-gray-500 border-2 w-full rounded-3xl max-w-sm">
          <img
            src="../assets/carp.jpg"
            alt="carpenter doing his work"
            className="rounded-t-3xl"
          />
          {/* text */}
          <div className="text-left py-6 p-4 grid gap-2">
            <span className="text-gray-700">6 min read</span>
            <p className="text-lg font-normal lg:text-2xl">
              Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
              Intercom Alternatives
            </p>
            <article className="text-sm lg:text-md">
              We've taken affordable Intercom alternatives to the 14-days test.
              Check out which 5 tools are the best.
            </article>
            <div className="ml-auto my-1">
              <AiOutlineArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>
      </Carousel>

      {/* Position dots below the Carousel */}
      <div className="flex justify-center mt-4">
        <Carousel
          responsive={responsive}
          showDots={true}
          renderDotsOutside={true} // Set to true to render dots outside the Carousel
          customDot={<CustomDot />}
        >
          {/* Empty carousel slides to render dots */}
          <div></div>
          <div></div>
        </Carousel>
      </div>
    </div>
  );
};

export default Teamslider;
