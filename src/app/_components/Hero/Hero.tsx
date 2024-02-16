"use client";

import Image from "next/image";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {
	handleClick: (slideIndex: any) => void;
};

const Hero = ({ handleClick }: Props) => {
	const [slogan] = useTypewriter({
		words: ["Hi, My name's Vo Minh Cuong"],
		loop: true,
		deleteSpeed: 20,
		typeSpeed: 50,
	});

	return (
		<div
			className="text-center w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
			id="portfolioHero"
		>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					scale: [1, 2, 2, 1],
					opacity: [0.5, 0.5, 1, 1],
				}}
				transition={{
					duration: 1.5,
				}}
				className="space-y-5 text-white"
			>
				<div className="hidden md:block shadow-9 h-[550px] w-[550px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
				<Image
					className="relative mx-auto h-40 w-40 rounded-full object-cover object-top"
					src="/cam-bong-bong.jpg"
					alt="avatar"
					width={949}
					height={1078}
					priority
				/>
				<h2 className="text-xs text-center uppercase tracking-[8px] md:text-sm font-semibold">
					Frontend Developer
				</h2>
				<h1 className="px-4 text-20 font-bold md:px-10 md:text-28  text-center h-10 w-full text-gradient-red">
					{slogan}
				</h1>
				<div className="z-1 relative mx-auto flex justify-center text-xs gap-4 md:text-sm ">
					<p
						className="transition-all duration-300 hover:shadow-10 hover:text-black p-1 rounded uppercase font-semibold cursor-pointer"
						title="About"
						onClick={() => handleClick(1)}
					>
						About
					</p>
					<p
						className="transition-all duration-300 hover:shadow-10 hover:text-black p-1 rounded uppercase font-semibold cursor-pointer"
						title="Projects"
						onClick={() => handleClick(2)}
					>
						Projects
					</p>
					<p
						className="transition-all duration-300 hover:shadow-10 hover:text-black p-1 rounded uppercase font-semibold cursor-pointer"
						title="Experience"
						onClick={() => handleClick(3)}
					>
						Experiences
					</p>
					<p
						className="transition-all duration-300 hover:shadow-10 hover:text-black p-1 rounded uppercase font-semibold cursor-pointer"
						title="Education"
						onClick={() => handleClick(5)}
					>
						Education
					</p>
					<p
						className="transition-all duration-300 hover:shadow-10 hover:text-black p-1 rounded uppercase font-semibold cursor-pointer"
						title="Skills"
						onClick={() => handleClick(4)}
					>
						Skills
					</p>
				</div>
				<div className="z-1 relative mx-auto flex justify-center gap-6 text-32 md:gap-10">
					<a
						href="tel:0764713925"
						target="_blank"
						className="hover:shadow-9 p-2 rounded-full block transition-all duration-300"
						title="Phone: 0764713925"
					>
						<Image
							src={"./phone-volume-solid.svg"}
							alt="Phone"
							width={25}
							height={25}
							loading="lazy"
							style={{
								filter:
									"invert(99%) sepia(39%) saturate(473%) hue-rotate(206deg) brightness(112%) contrast(100%);",
							}}
						/>
					</a>
					<a
						href="mailto:minhcuongvo2501@gmail.com"
						title="Email: minhcuongvo2501@gmail.com"
						className="hover:shadow-9 p-2 rounded-full block transition-all duration-300"
						target="_blank"
					>
						<Image
							src={"./envelope-solid.svg"}
							alt="Email"
							width={25}
							height={25}
							loading="lazy"
							style={{
								filter:
									"invert(99%) sepia(39%) saturate(473%) hue-rotate(206deg) brightness(112%) contrast(100%);",
							}}
						/>
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100004345321071&mibextid=ZbWKwL"
						className="hover:shadow-9 p-2 rounded-full block transition-all duration-300"
						title="Facebook: Minh Cuong Vo"
						target="_blank"
					>
						<Image
							src={"./facebook.svg"}
							alt="Facabook"
							width={25}
							height={25}
							loading="lazy"
							style={{
								filter:
									"invert(99%) sepia(39%) saturate(473%) hue-rotate(206deg) brightness(112%) contrast(100%);",
							}}
						/>
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
