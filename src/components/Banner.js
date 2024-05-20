import React from 'react';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Image from '../assets/avatar.png';
import { fadeIn } from '../variants';



const Banner = () => {




  return (
    <section className='min-h-[85vh] lg:min-h-[80vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-2 lg:flex-row lg:items-center
      lg:gap-x-12 ml-24'>
          <div className='flex-1 text-center font-secondary lg:flex-row lg:text-left'>
            <motion.h1 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='text-[45px] font-bold leading-[0.8]'>
                Sodaba <span>Ahmadi</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up',0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
            className='mb-2 text-[16px] lg:text-[40px] font-secondary
        font-semibold uppercase leading-[1]' >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Teacher',
                  2000,
                ]}

                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
                variants={fadeIn('up',0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.7}}
            className='mb-6 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero suscipit error illo, aliquam dolorum perferendis debitis iusto deleniti. Perspiciatis dolor sapiente quaerat et blanditiis deleniti sint quam cum esse!
            </motion.p>
            <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
            className='flex max-w-max gap-x-4 items-center mb-8
          mx-auto lg:mx-0'>
              <button className='btn btn-lg'><a href="#">Contact me</a></button>
            </motion.div>
            <motion.div
              variants={fadeIn('up',0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto
          lg:mx-0">
              <a href="https://www.linkedin.com/in/sodaba-ahmadi-324835197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/SodabaAhmadi" target="_blank">
                <FaGithub />
              </a>
              <a href="https://x.com/SodabaAhmadi?t=foxMxqiT9oihBVWLZ6Vu8A&s=09" target="_blank">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
           className='hidden lg:flex flex-1 max-w-[300px] 
           lg:max-w-[425px] mr-24'
          >
            <img src={Image}  alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
