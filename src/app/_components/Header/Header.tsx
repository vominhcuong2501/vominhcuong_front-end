'use client'

import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className='sticky top-10 px-10'>
      <motion.img
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}

        viewport={{ once: true }}
        transition={{
          duration: 1
        }}
        className='object-cover lg:w-[150px] rounded-[8px]'
        src='./logo-vmc.png'
        alt={'Vo Minh Cuong'}
      />
    </header>
  )
}

export default Header
