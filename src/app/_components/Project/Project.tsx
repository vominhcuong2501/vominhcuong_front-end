"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ProjectItem from "../ProjectItem";

const Project = () => {
	const data = [
		{
			imgProject: "/project-bincg.jpg",
			nameProject: "BIN Corporation Group",
			listIcon: [
				{
					name: "NextJs",
					icon: "/icon-nextjs.jpg",
				},
				{
					name: "HTML",
					icon: "/icon_html.webp",
				},
				{
					name: "CSS",
					icon: "/icon_css.webp",
				},
				{
					name: "Javascript",
					icon: "/icon_javascript.webp",
				},
				{
					name: "Tailwindss",
					icon: "/icon_tailwindcss.webp",
				},
				{
					name: "Typescript",
					icon: "/icon_typescript.webp",
				},
				{
					name: "Tanstack Query",
					icon: "/icon-tanstack-query.png",
				},
			],
			content: `<ul class="pl-5 list-disc">
			<li class="text-12 lg:text-14">
				Website:
				<a
					href="https://sandbox.bincorporation.com/"
					target="_blank"
					title="https://sandbox.bincorporation.com/"
					class="text-[#007aff]"
				>
					https://sandbox.bincorporation.com/
				</a>
			</li>
      <li class="text-12 lg:text-14">
				Status: In Processing
			</li>
			<li class="text-12 lg:text-14">
				Project description: Website introduces BIN CORPORATION GROUP, the
				fields in which the group operates and recruitment information for the
				group
			</li>
			<li class="text-12 lg:text-14">Number of participants: 5</li>
			<li class="text-12 lg:text-14">
				Tasks in the project: Build a website interface by design from figma
				into code.
			</li>
		</ul>`,
		},
		{
			imgProject: "/project_travelner.jpg",
			nameProject: "Travelner Insurance",
			listIcon: [
				{
					name: "NextJs",
					icon: "/icon-nextjs.jpg",
				},
				{
					name: "HTML",
					icon: "/icon_html.webp",
				},
				{
					name: "CSS",
					icon: "/icon_css.webp",
				},
				{
					name: "Javascript",
					icon: "/icon_javascript.webp",
				},

				{
					name: "Tailwindcss",
					icon: "/icon_tailwindcss.webp",
				},
				{
					name: "Typescript",
					icon: "/icon_typescript.webp",
				},
				{
					name: "Tanstack Query",
					icon: "/icon-tanstack-query.png",
				},
			],
			content: `<ul class="pl-5 list-disc">
			<li class="text-12 lg:text-14">
				Website:
				<a
					href="https://www.travelnerinsurance.com"
					target="_blank"
					title="https://www.travelnerinsurance.com"
					class="text-[#007aff]"
				>
					https://www.travelnerinsurance.com
				</a>
			</li>
			<li class="text-12 lg:text-14">
			Project description: Travelner Insurance is a global booking platform for travel
			insurance.
			</li>
			<li class="text-12 lg:text-14">Number of participants: 10</li>
			<li class="text-12 lg:text-14">
			Tasks in the project: implement the user interface and user functionalities based on
			the provided design and analysis documentation.
			</li>
		</ul>`,
		},
		{
			imgProject: "/project-meliwa.jpg",
			nameProject: "Meliwa",
			listIcon: [
				{
					name: "Wordpress",
					icon: "/icon-wp.png",
				},
				{
					name: "HTML",
					icon: "/icon_html.webp",
				},
				{
					name: "CSS",
					icon: "/icon_css.webp",
				},
				{
					name: "Javascript",
					icon: "/icon_javascript.webp",
				},
			],
			content: `<ul class="pl-5 list-disc">
			<li class="text-12 lg:text-14">
				Website:
				<a
					href="https://www.meliwa.vn/"
					target="_blank"
					title="https://www.meliwa.vn/"
					class="text-[#007aff]"
				>
					https://www.meliwa.vn/
				</a>
			</li>
			<li class="text-12 lg:text-14">
			Project description: This is an e-commerce website. Main product is air purifier.
			</li>
			<li class="text-12 lg:text-14">Number of participants: 4</li>
			<li class="text-12 lg:text-14">
			Tasks in the project: Build a website interface by design from figma into code.
			</li>
		</ul>`,
		},
		{
			imgProject: "/project_oneibc.jpg",
			nameProject: "OneIBC",
			listIcon: [
				{
					name: "NextJs",
					icon: "/icon-nextjs.jpg",
				},
				{
					name: "HTML",
					icon: "/icon_html.webp",
				},
				{
					name: "CSS",
					icon: "/icon_css.webp",
				},
				{
					name: "Javascript",
					icon: "/icon_javascript.webp",
				},
				{
					name: "Tailwindcss",
					icon: "/icon_tailwindcss.webp",
				},
				{
					name: "Typescript",
					icon: "/icon_typescript.webp",
				},
				{
					name: "Redux",
					icon: "/icon-redux.png",
				},
			],
			content: `<ul class="pl-5 list-disc">
			  <li class="text-12 lg:text-14">
				  Website: <a
					href="https://sandbox.oneibc.com/"
					target="_blank"
					title="https://sandbox.oneibc.com/"
					class="text-[#007aff]"
				>
					https://sandbox.oneibc.com/
				</a>
			  </li>
        <li class="text-12 lg:text-14">
				Status: In Processing
			</li>
			  <li class="text-12 lg:text-14">
			  Project description: Project description: One IBC Group specializes in providing offshore company formation, banking support to accounting & auditing services.
			  </li>
			  <li class="text-12 lg:text-14">Number of participants: 6</li>
			  <li class="text-12 lg:text-14">
			  Tasks in the project: implement the user interface and user functionalities based on
the provided design and analysis documentation.
			  </li>
		  </ul>`,
		},
	];

	return (
		<div
			className="relative h-screen max-w-[1200px] mx-auto flex justify-center"
			id="portfolioProjects"
		>
			<div className="absolute top-1/2 -translate-y-[50%] ">
				<motion.div
					initial={{
						opacity: 0,
						scale: 0,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.2,
					}}
				>
					<h2 className="text-24 uppercase md:text-32 font-bold text-center pb-2 md:pb-5  tracking-[10px] md:tracking-[20px] text-gradient-red">
						Projects
					</h2>
					<Swiper
						modules={[Navigation, Pagination]}
						className="mySwiper max-w-[343px] md:max-w-[700px] mx-auto !pb-8 md:!pb-4"
						slidesPerView={1}
						pagination={{
							clickable: true,
						}}
						spaceBetween={10}
						navigation={{
							nextEl: ".project-arrow-left",
							prevEl: ".project-arrow-right",
						}}
					>
						{data?.map((item, index) => {
							return (
								<SwiperSlide key={index}>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{
											duration: 1.2,
										}}
										className="flex flex-col justify-center  text-center "
									>
										<motion.div
											initial={{ translateY: 100 }}
											whileInView={{ translateY: 0 }}
											transition={{
												duration: 0.7,
											}}
										>
											<ProjectItem content={item} />
										</motion.div>
									</motion.div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<button className="project-arrow-left absolute right-0 -translate-y-1/2 top-1/2 z-10 hidden bg-white cursor-pointer rounded-full border hover:border-red-1 hover:fill-red-1 p-[11px] duration-200  md:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
						>
							<g clipPath="url(#clip0_2936_7113)">
								<path
									d="M4.71522 11.8041C5.00034 12.0653 5.46001 12.0653 5.74513 11.8041L10.5805 7.37568C10.8074 7.16784 10.8074 6.83211 10.5805 6.62428L5.74513 2.19582C5.46001 1.9347 5.00034 1.9347 4.71522 2.19582C4.43011 2.45695 4.43011 2.87794 4.71522 3.13907L8.92795 7.00264L4.7094 10.8662C4.4301 11.122 4.43011 11.5483 4.71522 11.8041Z"
									fill="#E60000"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.60265 2.07291C4.95147 1.75345 5.50887 1.75345 5.85769 2.07291L10.693 6.50137C10.9921 6.77527 10.9921 7.22469 10.693 7.49859L5.85769 11.927C5.50908 12.2463 4.95215 12.2465 4.60328 11.9276C4.24528 11.6058 4.24532 11.0652 4.59684 10.7433L8.68127 7.00256L4.60265 3.26198C4.60263 3.26195 4.60268 3.262 4.60265 3.26198C4.24549 2.93478 4.24543 2.40008 4.60265 2.07291ZM4.71522 11.8041L4.82779 11.6812C5.0492 11.884 5.41115 11.884 5.63256 11.6812L10.4679 7.25277C10.6227 7.111 10.6227 6.88896 10.4679 6.74719L5.63256 2.31873C5.41115 2.11595 5.0492 2.11595 4.82779 2.31873C4.61481 2.51379 4.61481 2.8211 4.82779 3.01616L9.17462 7.00273L4.82197 10.9891C4.6151 11.1786 4.61493 11.4903 4.82652 11.6801L4.71522 11.8041Z"
									fill="#E60000"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2936_7113">
									<rect
										width="12.5"
										height="12.5"
										fill="white"
										transform="translate(0.75 0.75)"
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
					<button className="project-arrow-right absolute left-0 -translate-y-1/2 top-1/2 z-10 hidden bg-white cursor-pointer rounded-full border hover:border-red-1 hover:fill-red-1 p-[11px] duration-200 md:block">
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
				</motion.div>
			</div>
		</div>
	);
};

export default Project;
