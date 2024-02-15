"use client";

import { motion } from "framer-motion";
const Contact = () => {
	return (
		<div className="relative h-screen max-w-[1200px] mx-auto flex justify-center">
			<div className="absolute top-1/2 -translate-y-[50%]">
				<h2 className="text-24 uppercase md:text-32 font-bold text-center pb-2 md:pb-5 text-gradient-red tracking-[10px] md:tracking-[20px]">
					Contact
				</h2>
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
					123
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
