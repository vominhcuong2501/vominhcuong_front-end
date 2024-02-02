"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

const Experience = () => {
  const data = [
    {
      logoCompany: "/logo_company_bincg.png",
      position: "Front-end Web Developer",
      nameCompany: "BIN Corporation Group",
      descriptionCompany:
        "BIN Corporation Group is an international multi-disciplinary company based in Ho Chi Minh City, Vietnam. I joined BIN Corporation Group as a Frontend Developer, specializing in creating user interfaces for corporate websites.",
      time: "18/10/2022 - Now",
      listIcon: [
        {
          name: "HTML",
          icon: "/icon-skill-html.png",
        },
        {
          name: "CSS",
          icon: "/icon-skill-css.png",
        },
        {
          name: "Javascript",
          icon: "/icon-skill-javascript.png",
        },
        {
          name: "NextJs",
          icon: "/icon-skill-nextjs.png",
        },
        {
          name: "ReactJs",
          icon: "/icon-skill-reactjs.png",
        },
        {
          name: "Tailwindcss",
          icon: "/icon-skill-tailwindcss.png",
        },
        {
          name: "Typescript",
          icon: "/icon-skill-typescript.png",
        },
        {
          name: "Tanstack Query",
          icon: "/icon-skill-tanstack-query.png",
        },
      ],
    },
    {
      logoCompany: "/wonderlabs.png",
      position: "Front-end Web Developer",
      nameCompany: "WONDERLABS",
      descriptionCompany:
        "Wonderlabs is a venture-capital backed service that runs offshore software development centres in Asia. We work closely with global partners that develop innovative, state-of-the-art software and IOT products.",
      time: "05/07/2022 - 05/10/2022",
      listIcon: [
        {
          name: "HTML",
          icon: "/icon-skill-html.png",
        },
        {
          name: "CSS",
          icon: "/icon-skill-css.png",
        },
        {
          name: "Javascript",
          icon: "/icon-skill-javascript.png",
        },
      ],
    },
  ];

  return (
    <div
      className="relative mx-auto flex lg:flex-row flex-col h-screen max-w-[1200px] items-center justify-center px-5 pt-10 lg:pt-14 text-center lg:text-left"
      id="portfolioExperience"
    >
      <h2 className="lg:absolute lg:top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-32 font-bold pb-2 lg:pb-0">
        Experience
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
        <Swiper
          modules={[Navigation, EffectFade, Pagination]}
          className="mySwiper max-w-[343px] lg:max-w-[900px] !pb-10"
          slidesPerView={1}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <article className="mx-auto flex h-full w-full items-center justify-center transition-all md:w-[600px] md:gap-4 lg:w-[800px]">
                  <div className="flex w-full flex-shrink-0 flex-col items-center justify-center gap-3 rounded-[16px] bg-slate-800 p-5 ">
                    <motion.img
                      initial={{
                        y: -100,
                      }}
                      whileInView={{
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                      }}
                      className="relative mx-auto h-24 w-24 shrink-0 rounded-full bg-white object-cover 2xl:h-36 2xl:w-36"
                      src={item.logoCompany}
                      alt={item.nameCompany}
                    />

                    <div className="space-y-3 md:space-y-4 text-[#fff]">
                      <h3 className="text-center text-16 font-light md:text-20 2xl:text-28 text-[#fff]">
                        {item.position}
                      </h3>
                      <h4 className="text-center text-12 font-bold uppercase tracking-widest md:text-14 2xl:text-18">
                        {item.nameCompany}
                      </h4>
                      <div className="flex justify-center gap-2">
                        {item.listIcon?.map((icon, index) => {
                          return (
                            <Image
                              key={index}
                              src={icon.icon}
                              alt={icon.name}
                              title={icon.name}
                              width={48}
                              height={48}
                              className="h-7 w-7 rounded-full md:h-12  md:w-12"
                            />
                          );
                        })}
                      </div>
                      <p className="text-color-text-light-secondary">
                        {item.time}
                      </p>
                      <p>{item.descriptionCompany}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Experience;
