"use client";
import About from "./_components/About";
import Hero from "./_components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import Experience from "./_components/Experience";
import Project from "./_components/Project";
import Skills from "./_components/Skills";
import React, { useRef, useState } from "react";
import "swiper/swiper-bundle.css";

export default function Home() {
  // Kích hoạt các module cần thiết của Swiper
  const swiperRef = useRef(null);
  // State để lưu trạng thái hiện tại của Swiper
  const [swiper, setSwiper] = useState<any>();

  // Hàm xử lý khi nhấn vào thẻ để điều hướng đến slide cụ thể
  const goToSlide = (slideIndex: any) => {
    swiper.slideTo(slideIndex);
  };

  return (
    <section className="max-w-[1200px] mx-auto relative">
      <button
        className=" absolute right-10 bottom-10 z-10 bg-white cursor-pointer rounded-full p-4 rotate-90"
        onClick={() => goToSlide(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M9.28608 2.19582C9.00097 1.9347 8.54129 1.9347 8.25617 2.19582L3.42085 6.62428C3.19392 6.83212 3.19392 7.16785 3.42085 7.37568L8.25617 11.8041C8.54129 12.0653 9.00097 12.0653 9.28608 11.8041C9.5712 11.543 9.5712 11.122 9.28608 10.8609L5.07335 6.99732L9.2919 3.13374C9.5712 2.87795 9.5712 2.45162 9.28608 2.19582Z"
            fill="#E60000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.39865 11.927C9.04983 12.2465 8.49243 12.2465 8.14361 11.927L3.30828 7.49859C3.00922 7.22469 3.00922 6.77527 3.30828 6.50137L8.14361 2.07291C8.49222 1.75364 9.04916 1.75345 9.39802 2.07234C9.75602 2.39417 9.75598 2.93471 9.40447 3.25665L5.32003 6.9974L9.39865 10.738C9.39862 10.738 9.39868 10.738 9.39865 10.738C9.75581 11.0652 9.75587 11.5999 9.39865 11.927ZM9.28608 2.19582L9.17351 2.31873C8.9521 2.11595 8.59015 2.11595 8.36874 2.31873L3.53341 6.74719C3.37862 6.88896 3.37862 7.111 3.53341 7.25277L8.36874 11.6812C8.59015 11.884 8.9521 11.884 9.17351 11.6812C9.3865 11.4862 9.3865 11.1789 9.17351 10.9838L4.82668 6.99723L9.17933 3.01083C9.38621 2.82137 9.38637 2.50971 9.17478 2.31988L9.28608 2.19582Z"
            fill="#E60000"
          />
        </svg>
      </button>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        className="parentSwiper h-[100vh]"
        ref={swiperRef}
        onSwiper={(swiper: any) => setSwiper(swiper)}
      >
        <SwiperSlide>
          <Hero handleClick={goToSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Experience />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
