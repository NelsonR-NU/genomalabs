"use client"

import Image from 'next/image'
import BannerImg from '@/assets/png/banner.png'
import { splitStringChars } from '@/utils/splitString'
import { motion } from 'framer-motion';

const Hero = () => {
  const nameChars = splitStringChars('Empowering the Next Generation of Innovators')
  const nameChars2 = splitStringChars('of Innovators')

  const charVariants = {
    hidden: {opacity: 0},
    revealed: {opacity: 1}
  }

  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image alt="" src={BannerImg} className='flex flex-grow h-full -z-1'/>
        <motion.div
          animate={{opacity: 1}}
          className="flex flex-col justify-center items-center bg-gradient-to-t from-black/70 to-transparent gap-5 z-10 flex-1 text-center text-white absolute flex-grow w-full h-full"    
          transition={{
            ease: 'easeInOut',
            duration: 0.2,
            delay: 0.0,
          }}>

          <motion.h1
            className='text-[4rem] text-center max-w-[1080px]'
            initial="hidden"
            transition={{staggerChildren: 0.1}}
            whileInView="revealed"
          >
            {nameChars.map((char) =>
              <motion.span
                key={char}
                transition={{duration: 0.2}}
                variants={charVariants}
              >
                {char}
              </motion.span>
            )}
          </motion.h1>
        {/* <a href="#" className="bg-test-cyan text-black px-6 py-3 rounded-full">Discover Genomalabs</a>
        <a href="#" className="bg-black border-1 border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a> */}
      </motion.div>
    </section>
  );
}

export default Hero