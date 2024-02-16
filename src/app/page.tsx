"use client";
import About from "./_components/About";
import Hero from "./_components/Hero";
import Experience from "./_components/Experience";
import Project from "./_components/Project";
import Skills from "./_components/Skills";
import Education from "./_components/Education";
import ThankYou from "./_components/ThankYou";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function Home() {
	const swiperRef = useRef(null);

	const [swiper, setSwiper] = useState<any>();

	const goToSlide = (slideIndex: any) => {
		swiper.slideTo(slideIndex);
	};

	return (
		<section className="max-w-[1920px] mx-auto ">
			<button
				className=" absolute right-2 bottom-2 md:right-10 md:bottom-10 z-10 bg-white cursor-pointer rounded-full p-4 hover:opacity-90"
				onClick={() => goToSlide(0)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						d="M0.705315 7.29468C0.31578 7.68422 0.31578 8.31578 0.705316 8.70532C1.0946 9.0946 1.72568 9.09489 2.11531 8.70595L7 3.83V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V3.83L13.8703 8.70905C14.2622 9.10159 14.8981 9.10188 15.2903 8.70968C15.6823 8.31774 15.6823 7.68226 15.2903 7.29032L9.33333 1.33333C8.59695 0.596952 7.40305 0.596954 6.66667 1.33333L0.705315 7.29468Z"
						fill="#e60000"
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
					<Project />
				</SwiperSlide>
				<SwiperSlide>
					<Experience />
				</SwiperSlide>
				<SwiperSlide>
					<Skills />
				</SwiperSlide>
				<SwiperSlide>
					<Education />
				</SwiperSlide>
				<SwiperSlide>
					<ThankYou />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
