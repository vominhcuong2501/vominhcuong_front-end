'use client'

import Image from 'next/image'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

type Props = {}

const Hero = ({ }: Props) => {
  const [slogan] = useTypewriter({
    words: ['Hi, The Name Võ Minh Cường'],
    loop: true,
    deleteSpeed: 20,
    typeSpeed: 50
  })

  return (
    <div className=' flex h-screen flex-col items-center justify-center overflow-hidden pt-28 text-center'>
      <div className='space-y-5'>
        <div className='relative z-0'>
          <div className='absolute left-1/2 top-1/2'>
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                scale: [1, 2, 2, 1],
                opacity: [0.5, 0.5, 1, 1]
              }}
              transition={{
                duration: 2
              }}
              className='relative flex items-center justify-center'
            >
              <div className='absolute  h-[300px] w-[300px] animate-ping rounded-full border border-neutral-500' />
              <div className='absolute  h-[600px] w-[600px] animate-pulse rounded-full border border-neutral-500' />
            </motion.div>
          </div>
          <Image
            className='relative mx-auto h-32 w-32 rounded-full object-cover'
            src='/cam-bong-bong.jpg'
            // src='https://cdn.sanity.io/images/gm83a3pq/production/b0b000c16ab8ea8df2bfc42f762845d0fd1be3b0-828x828.jpg'
            alt='avatar'
            width={128}
            height={128}
            priority
          />
        </div>
        <div className='z-1 relative space-y-5'>
          <h2 className='text-xs uppercase tracking-[8px] md:text-sm md:tracking-[12px]'>Frontend Developer</h2>
          <h1 className='px-4 text-20 font-bold md:px-10 md:text-28'>
            <span>{slogan}</span>
            <Cursor cursorColor='#ea580c' />
          </h1>
          <div className='z-1 relative mx-auto flex justify-center gap-6 text-xs md:gap-10 md:text-sm'>
            <a href='#portfolioAbout'>
              <button className='uppercase' title='About' aria-label='About'>
                About
              </button>
            </a>
            <a href='#portfolioExperience'>
              <button className='uppercase' title='Experience' aria-label='Experience'>
                Experience
              </button>
            </a>
            <a href='#portfolioSkills'>
              <button className='uppercase' title='Skills' aria-label='Skills'>
                Skills
              </button>
            </a>
            <a href='#portfolioProjects'>
              <button className='uppercase' title='Projects' aria-label='Projects'>
                Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
