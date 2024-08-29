import React from 'react'
import Image from 'next/image'
import { MdEmail, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => (
  <div className='min-h-screen relative' id="home">
    <Image src='/hero-bg.jpeg' className='z-0 absolute opacity-5 object-cover object-center' fill alt="" />
    {/* <div className='max-w-[1440px] 2xl:m-auto'> */}
      <div className='fixed w-full flex flex-row justify-between xsm:px-4 md:px-6 xsm:py-1 md:py-2 z-10 bg-black-300 bg-opacity-50 backdrop-blur'>
        <div>
          <p className='text-primary-500 xsm:text-xl md:text-3xl font-logo'>AD</p>
        </div>
        <div className='w-1/3 flex flex-row justify-evenly ml-20'>
          <a href='#home' className='text-secondary-500 xsm:text-lg md:text-xl font-title'>Home</a>
          <a href='#about' className='text-secondary-500 xsm:text-lg md:text-xl font-title'>About</a>
          <a href='#work' className='text-secondary-500 xsm:text-lg md:text-xl font-title'>Work</a>
          <a href='#projects' className='text-secondary-500 xsm:text-lg md:text-xl font-title'>Projects</a>
          <a href='#contact' className='text-secondary-500 xsm:text-lg md:text-xl font-title'>Contact</a>
        </div>
        <div className='w-1/12 flex justify-between items-center'>
          <a href='resume/Aaryen.pdf' download><FaFileAlt className='text-primary-500 xsm:text-lg md:text-2xl' /></a>
          <a href='https://github.com/aaryen-dsouza'><FaGithub className='text-primary-500 xsm:text-lg md:text-2xl' /></a>
          <a href='https://www.linkedin.com/in/aaryendsouza/'><FaLinkedinIn className='text-primary-500 xsm:text-lg md:text-2xl' /></a>
          <a href='mailto:dsouza96@uwindsor.ca'><MdEmail className='text-primary-500 xsm:text-lg md:text-2xl' /></a>
        </div>
      </div>
      <div className='min-h-screen flex flex-col justify-center text-center'>
        <p className='font-title text-8xl xsm:text-5xl md:text-8xl text-primary-500 tracking-wide'>Aaryen DSouza</p>
        <p className='font-body text-xl text-white-500 mt-4 xsm:hidden md:block'>Graduate Student. Software Engineer.</p>
        <p className='font-body text-lg text-white-500 mt-4 md:hidden'>Lorem ipsum.</p>
        <p className='font-body text-lg text-white-500 md:hidden'>Bloop Floof.</p>
        <p className='font-body xsm:text-lg md:text-xl text-white-500'></p>
      </div>
      <div className='absolute bottom-0 pb-2 w-full max-w-[1440px] flex flex-row justify-center'>
        <MdKeyboardDoubleArrowDown className='text-primary-500 text-3xl opacity-30 animate-bounce' />
      </div>
    {/* </div> */}
  </div>
)

export default Hero