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
        <div className="hidden md:block border border-white h-[550px] w-[550px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <Image
          className="relative mx-auto h-40 w-40 rounded-full object-cover object-top"
          src="/cam-bong-bong.jpg"
          alt="avatar"
          width={949}
          height={1078}
          priority
        />
        <h2 className="text-xs text-center uppercase tracking-[8px] md:text-sm ">
          Frontend Developer
        </h2>
        <h1 className="px-4 text-20 font-bold md:px-10 md:text-28 text-gradient-red text-center h-10 w-full">
          {slogan}
        </h1>
        <div className="z-1 relative mx-auto flex justify-center gap-6 text-xs md:gap-10 md:text-sm ">
          <p
            className="transition-all duration-300 hover:text-[#22bcc3] uppercase font-semibold cursor-pointer"
            title="About"
            onClick={() => handleClick(1)}
          >
            About
          </p>
          <p
            className="transition-all duration-300 hover:text-[#22bcc3] uppercase font-semibold cursor-pointer"
            title="Experience"
            onClick={() => handleClick(2)}
          >
            Experiences
          </p>
          <p
            className="transition-all duration-300 hover:text-[#22bcc3] uppercase font-semibold cursor-pointer"
            title="Skills"
            onClick={() => handleClick(3)}
          >
            Skills
          </p>
          <p
            className="transition-all duration-300 hover:text-[#22bcc3] uppercase font-semibold cursor-pointer"
            title="Projects"
            onClick={() => handleClick(4)}
          >
            Projects
          </p>
        </div>
        <div className="z-1 relative mx-auto flex justify-center gap-6 text-xs md:gap-10 md:text-sm ">
          <p
            className="transition-all duration-300 hover:text-[#22bcc3] uppercase font-semibold cursor-pointer"
            title="Education"
            onClick={() => handleClick(5)}
          >
            Education
          </p>
          <p
            className="transition-all duration-300 hover:text-[#22bcc3] uppercase font-semibold cursor-pointer"
            title="Contact"
            onClick={() => handleClick(6)}
          >
            Contact
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
