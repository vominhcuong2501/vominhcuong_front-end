// "use client";
// import About from "./_components/About";
// import Hero from "./_components/Hero";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Mousewheel, Pagination } from "swiper/modules";
// import Experience from "./_components/Experience";
// import Project from "./_components/Project";
// import Skills from "./_components/Skills";

// export default function Home() {
// 	const menuPagination = [
// 		"Home",
// 		"About",
// 		"Experience",
// 		"Skills",
// 		"Projects",
// 		"Contact",
// 		"Education",
// 	];

// 	const pagination = {
// 		clickable: true,
// 		renderBullet: (index: number) => {
// 			return `<p class="!text-white !border !border-white !p-2 !my-2 !rounded-[4px] !z-50 font-bold swiper-pagination-bullet custom-pagination">${menuPagination[index]}</p>`;
// 		},
// 	};

// 	return (
// 		<section>
// 			<Swiper
// 				direction={"vertical"}
// 				slidesPerView={1}
// 				spaceBetween={0}
// 				mousewheel={true}
// 				modules={[Mousewheel, Pagination]}
// 				className="parentSwiper h-[100vh]"
// 				pagination={pagination}
// 			>
// 				<SwiperSlide>
// 					<Hero />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<About />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Experience />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Skills />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Project />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Project />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Project />
// 				</SwiperSlide>
// 			</Swiper>
// 		</section>
// 	);
// }

import About from "./_components/About";
import Hero from "./_components/Hero";
import Experience from "./_components/Experience";
import Project from "./_components/Project";
import Skills from "./_components/Skills";

export default function Home() {
	return (
		<section>
			<Hero />

			<About />

			<Experience />

			<Skills />

			<Project />

			<Project />

			<Project />
		</section>
	);
}
