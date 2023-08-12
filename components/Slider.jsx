'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from '@/components/Slide';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 60, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 60, // this is needed to tell the amount of px that should be visible.
    },
  };

  const settings = {
    className: 'center slider variable-width flex items-center',
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    variableWidth: true,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        <div style={{ width: 500 }}>
          <Slide
            text="I've been using HomeHelper as a tool to enhance my sales. My boss thinks it's all me… I wont tell him if you don't."
            name="KYLE WINFIELD"
            title="Licensed HVAC Technician"
            imgPath="testimonial/5.jpg"
          />
        </div>
        <div style={{ width: 500 }}>
          <Slide
            text="I’ve worked in the HVAC industry for over 15 years, spending most of that time working with consulting engineers. HomeHelper is an incredible resource for consumers and industry professionals. Consumers are constantly confused and trying to understand what they need to do and want a straight answer. I believe this will lead them in that direction. As a professional I can’t tell you how many hours I have spent scouring the internet for information. Having a resource where this is done for me would save me time and allow me to focus on other opportunities. I can’t wait to see what happens next with HomeHelper!"
            name="JEFF MILLER"
            title="Senior Mechanical Sales Engineer"
            imgPath="testimonial/3.jpeg"
          />
        </div>
        <div style={{ width: 500 }}>
          <Slide
            text="Calling a contractor is always difficult for me when i know i am capable of performing the job, Leo educated me and walked me through my issue helping me solve it, thus saving me from a hefty bill. Love it!"
            name="JORDAN BOGUE"
            title="Maintenance Technician"
            imgPath="testimonial/6.jpg"
          />
        </div>
        <div style={{ width: 500 }}>
          <Slide
            text="HomeHelper changed the game for our home makeover projects - LEO has been an amazing help from start to finish."
            name="HAILEY CAGE"
            title="Nurse and Home Flipper"
            imgPath="testimonial/2.jpg"
          />
        </div>
        <div style={{ width: 500 }}>
          <Slide
            text="HomeHelper was my first experience with AI and it really opened my eyes to the possibilities. Since I started using HomeHelper, my confidence with DIY projects has skyrocketed."
            name="DESTINY BAILEY"
            title="Interior Designer"
            imgPath="testimonial/4.jpg"
          />
        </div>
      </Slider>
      {/*<Carousel*/}
      {/*  responsive={responsive}*/}
      {/*  swipeable={true}*/}
      {/*  draggable={true}*/}
      {/*  partialVisbile={true}*/}
      {/*  slidesToSlide={1}*/}
      {/*  partialVisible="right"*/}
      {/*>*/}
      {/*  <Slide*/}
      {/*    text="“I’ve worked in the HVAC industry for over 15 years, spending most of that time working with consulting engineers. HomeHelper is an incredible resource for consumers and industry professionals. Consumers are constantly confused and trying to understand what they need to do and want a straight answer. I believe this will lead them in that direction. As a professional I can’t tell you how many hours I have spent scouring the internet for information. Having a resource where this is done for me would save me time and allow me to focus on other opportunities. I can’t wait to see what happens next with HomeHelper!”"*/}
      {/*    name="JEFF MILLER"*/}
      {/*    title="Senior Mechanical Sales Engineer"*/}
      {/*    imgPath="kyle.png"*/}
      {/*  />*/}
      {/*<Slide*/}
      {/*  text="“I've been using HomeHelper as a tool to enhance my sales. My boss thinks it's all me… I wont tell him if you don't.”"*/}
      {/*  name="KYLE WINFIELD"*/}
      {/*  title="Licensed HVAC Technician"*/}
      {/*  imgPath="kyle.png"*/}
      {/*/>*/}
      {/*<Slide*/}
      {/*  text="“Calling a contractor is always difficult for me when i know i am capable of performing the job, Leo educated me and walked me through my issue helping me solve it, thus saving me from a hefty bill. Love it!”"*/}
      {/*  name="JORDAN BOGUE"*/}
      {/*  title="Maintenance Technician"*/}
      {/*  imgPath="kyle.png"*/}
      {/*/>*/}
      {/*<Slide*/}
      {/*  text="“HomeHelper changed the game for our home makeover projects - LEO has been an amazing help from start to finish.”"*/}
      {/*  name="HAILEY CAGE"*/}
      {/*  title="Nurse and Home Flipper"*/}
      {/*  imgPath="kyle.png"*/}
      {/*/>*/}
      {/*<Slide*/}
      {/*  text="“HomeHelper was my first experience with AI and it really opened my eyes to the possibilities. Since I started using HomeHelper, my confidence with DIY projects has skyrocketed.”"*/}
      {/*  name="DESTINY BAILEY"*/}
      {/*  title="Interior Designer"*/}
      {/*  imgPath="kyle.png"*/}
      {/*/>*/}
      {/*</Carousel>*/}

      {/*<Swiper*/}
      {/*  slidesPerView={3}*/}
      {/*  spaceBetween={30}*/}
      {/*  // centeredSlides={true}*/}
      {/*  grabCursor*/}
      {/*  pagination={{*/}
      {/*    clickable: true,*/}
      {/*  }}*/}
      {/*  modules={[Pagination, Mousewheel, Keyboard]}*/}
      {/*  className="mySwiper"*/}
      {/*>*/}
      {/*  <SwiperSlide>*/}
      {/*    <Slide*/}
      {/*      text="“I’ve worked in the HVAC industry for over 15 years, spending most of that time working with consulting engineers. HomeHelper is an incredible resource for consumers and industry professionals. Consumers are constantly confused and trying to understand what they need to do and want a straight answer. I believe this will lead them in that direction. As a professional I can’t tell you how many hours I have spent scouring the internet for information. Having a resource where this is done for me would save me time and allow me to focus on other opportunities. I can’t wait to see what happens next with HomeHelper!”"*/}
      {/*      name="JEFF MILLER"*/}
      {/*      title="Senior Mechanical Sales Engineer"*/}
      {/*      imgPath="kyle.png"*/}
      {/*    />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <Slide*/}
      {/*      text="“I’ve worked in the HVAC industry for over 15 years, spending most of that time working with consulting engineers. HomeHelper is an incredible resource for consumers and industry professionals. Consumers are constantly confused and trying to understand what they need to do and want a straight answer. I believe this will lead them in that direction. As a professional I can’t tell you how many hours I have spent scouring the internet for information. Having a resource where this is done for me would save me time and allow me to focus on other opportunities. I can’t wait to see what happens next with HomeHelper!”"*/}
      {/*      name="JEFF MILLER"*/}
      {/*      title="Senior Mechanical Sales Engineer"*/}
      {/*      imgPath="kyle.png"*/}
      {/*    />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <Slide*/}
      {/*      text="“I’ve worked in the HVAC industry for over 15 years, spending most of that time working with consulting engineers. HomeHelper is an incredible resource for consumers and industry professionals. Consumers are constantly confused and trying to understand what they need to do and want a straight answer. I believe this will lead them in that direction. As a professional I can’t tell you how many hours I have spent scouring the internet for information. Having a resource where this is done for me would save me time and allow me to focus on other opportunities. I can’t wait to see what happens next with HomeHelper!”"*/}
      {/*      name="JEFF MILLER"*/}
      {/*      title="Senior Mechanical Sales Engineer"*/}
      {/*      imgPath="kyle.png"*/}
      {/*    />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <Slide*/}
      {/*      text="“I’ve worked in the HVAC industry for over 15 years, spending most of that time working with consulting engineers. HomeHelper is an incredible resource for consumers and industry professionals. Consumers are constantly confused and trying to understand what they need to do and want a straight answer. I believe this will lead them in that direction. As a professional I can’t tell you how many hours I have spent scouring the internet for information. Having a resource where this is done for me would save me time and allow me to focus on other opportunities. I can’t wait to see what happens next with HomeHelper!”"*/}
      {/*      name="JEFF MILLER"*/}
      {/*      title="Senior Mechanical Sales Engineer"*/}
      {/*      imgPath="kyle.png"*/}
      {/*    />*/}
      {/*  </SwiperSlide>*/}
      {/*</Swiper>*/}
    </div>
  );
};

export default SliderPage;
