import Image from 'next/image'
import React from 'react'
import { EDUCATION, SKILLS } from '../constants'

const About = () => (
  <div id="about" className='min-h-screen max-w-[1440px] m-auto flex items-center'>
    <div className='lg:flex items-center lg:min-h-screen py-12 lg:pt-12'>
      <p className='text-primary-500 text-6xl lg:text-6xl xl:text-7xl font-title h-max w-full text-center xl:w-3/5 lg:-rotate-90'>About Me</p>
      <div className='flex flex-col mt-8 lg:mt-0'>
        <div>
          <div className='w-3/4 xl:w-4/6 ml-8 md:ml-16 lg:ml-12 xl:ml-28 border-4 border-primary-500 bg-secondary-500/20 p-8 xl:p-10 rounded-t-[80px] rounded-bl-[80px]'>
            <p className='text-sm xl:text-lg text-white-500 font-body text-justify'>
              &ldquo;I am a Graduate student pursuing a Master of Applied Computing at the University of Windsor, with a solid foundation in Computer Engineering. My expertise spans full-stack development, automation, and data validation, with hands-on experience in Java, JavaScript, React, Node.js, and Oracle SQL. I have successfully optimized data workflows, reduced issue resolution times, and developed responsive, user-focused applications. I am proficient in utilizing tools like Git, Figma, and VS Code to drive efficiency and innovation. With a strong commitment to continuous learning and an eye for scalable solutions, I am seeking internship opportunities to apply my technical skills and contribute to impactful projects.&rdquo;
            </p>
          </div>
          <Image src='/profile1.png' width={60} height={60} className='rounded-full hidden md:block border-2 border-primary-500 bg-black-400 relative left-[92%] lg:left-[90%] xl:left-[82%] -translate-x-full w-max' alt="" />
          <Image src='/profile1.png' width={40} height={40} className='rounded-full block md:hidden border-2 border-primary-500 bg-black-400 relative left-[85%]' alt="" />
        </div>
        <div className='lg:w-10/12 xl:w-9/12 ml-4 md:ml-10 xl:ml-24 p-2 mt-4'>
          <p className='text-secondary-500 text-3xl font-title w-full'>Education</p>
          {
            EDUCATION.map((education, index) => (
              <div key={index} className='flex justify-between items-center pt-4 pr-6 md:pr-12'>
                <div>
                  <p className='text-white-500 font-body text-md'>{education.title}</p>
                  <p className='text-white-500 font-body text-sm'>{education.university} &#x2022; {education.duration}</p>
                </div>
                <p className='text-white-500 text-xs'>{education.scoreType} - {education.score}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col items-center justify-center lg:w-10/12 xl:w-9/12 ml-4 md:ml-10 xl:ml-24 p-2 mt-4'>
          <p className='text-secondary-500 text-3xl font-title w-full'>Skills</p>
          <p className='text-white-500 font-body lg:text-sm xl:text-lg w-full mt-2 !leading-10 xl:!leading-[3rem]'>
            {
              SKILLS.map((skill, index) => (
                <span key={index}>
                  <span className='bg-black-400 p-2 text-md'>{skill}</span>
                  <span> </span>
                </span>
              ))
            }
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default About