"use client";
import About from "./_components/About";
import Hero from "./_components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import Header from "./_components/Header";
import Experience from "./_components/Experience";
import Project from "./_components/Project";

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<Swiper
				direction={"vertical"}
				slidesPerView={1}
				spaceBetween={30}
				mousewheel={true}
				modules={[Mousewheel, Pagination]}
				className="mySwiper h-[100vh]"
			>
				<SwiperSlide>
					<Hero />
				</SwiperSlide>
				<SwiperSlide>
					<About />
				</SwiperSlide>
				<SwiperSlide>
					<Experience />
				</SwiperSlide>
				<SwiperSlide>
					<Project />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
