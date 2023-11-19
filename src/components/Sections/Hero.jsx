import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { heroImage } from "../../assets";

const Hero = () => {
  const iconArrowNext = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M6.66666 16H25.3333"
        stroke="#6C7275"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3333 24L25.3333 16"
        stroke="#6C7275"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3333 8L25.3333 16"
        stroke="#6C7275"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const iconArrowPrev = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M6.66669 16H25.3334"
        stroke="#6C7275"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66669 16L14.6667 24"
        stroke="#6C7275"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66669 16L14.6667 8"
        stroke="#6C7275"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="px-4 md:px-8 lg:px-[160px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        className="rounded-xl select-none relative"
      >
        <SwiperSlide>
          <img
            src={heroImage}
            alt="Furniture"
            className="w-full h-[300px] lg:h-[530px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroImage}
            alt="Furniture"
            className="h-[300px] lg:h-[530px] w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroImage}
            alt="Furniture"
            className="h-[300px] lg:h-[530px] w-full object-cover"
          />
        </SwiperSlide>
        <div className="swiper-button-prev absolute z-10 top-1/2 left-5 w-[40px] h-[40px] rounded-full bg-white shadow-sm hidden md:flex justify-center items-center navigation-hovered">
          {iconArrowPrev}
        </div>
        <div className="swiper-button-next absolute z-10 top-1/2 right-5 w-[40px] h-[40px] rounded-full bg-white shadow-sm hidden md:flex justify-center items-center navigation-hovered">
          {iconArrowNext}
        </div>
      </Swiper>
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center mt-8 mb-10">
        <div className="w-full md:w-1/2 font-medium text-[40px] md:text-[50px] lg:text-[66px] leading-10 md:leading-[72px] tracking-tighter text-primary">
          <h1>
            Simply Unique<span className="text-secondary">/</span> Simply Better
            <span className="text-secondary">.</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 flex items-center mt-5 md:mt-0">
          <p className="text-secondary text-sm md:text-base">
            <span className="text-primary">3legant</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
