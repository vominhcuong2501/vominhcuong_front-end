'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='relative mx-auto flex h-screen max-w-[1200px] items-center justify-center px-5 pt-14 text-center lg:text-left' id='portfolioAbout'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>About</h2>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='flex flex-col items-center justify-center gap-8 lg:flex-row'
      >
        <motion.img
          initial={{
            x: -200
          }}
          whileInView={{
            x: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1
          }}
          className='relative mx-auto h-40 w-40 shrink-0 rounded-full object-cover lg:h-96 lg:w-96 lg:rounded-lg'
          src='https://cdn.sanity.io/images/gm83a3pq/production/24c9c37ff50d2556fe88d8feee8327bbffbd70b2-962x961.jpg'
          alt={'About me'}
        />
        <div className='space-y-5'>
          <h3 className='text-20 font-bold md:text-32'>Here is a little background</h3>
          <p className='text-16 md:text-18'>
            My name is Nguyen Thien An, and I was born in 1998 in Tien Giang Province, Vietnam 🇻🇳. Currently, I am
            living and working in Ho Chi Minh City, Vietnam as a Frontend Web Developer 🖥 with two year of experience.
            I have a passion for programming 💻, which drives me to create the highest quality website products using
            the latest technologies for my clients. I am always seeking new challenges and opportunities to expand my
            skillset and grow as a developer. In my free time, I enjoy learning about new programming languages and
            experimenting with different coding techniques. I believe that my dedication, hard work, and attention to
            detail have helped me excel in my field and will continue to propel me towards success in the future.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
