import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Development',
    description: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, cum! Veniam earum ipsam laboriosam.',    
    link:'Learn more',
  },
  {
    name: 'UI/UX Design',
    description: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, cum! Veniam earum ipsam laboriosam.',    
    link:'Learn more',
  },
  {
    name: 'Tutoring',
    description: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, cum! Veniam earum ipsam laboriosam.',
    link:'Learn more',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto ">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
             className='flex-1 mb-12 lg:mb-0 '>
            <h2 className="h2 text-accent mb-6">
              What I Do.
            </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full Stack Developer with over a year of experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>

          <motion.div
           variants={fadeIn('left',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
           className='flex-1'>
            <div>
              {services.map((service,index) => {
                const {name, description, link} = service;
                return (
                  <div 
                  className='border-b border-white/30
                  h-[136px] mb-[28px] flex'
                   key={index}>

                    <div className='max-w-[446px]'>
                      <h4 className='text-[20px] tracking-wider
                      font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a 
                        href="#"
                        className='btn w-9 h-9 mb-[42px] flex
                        justify-center items-center'
                      >
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  )
 
};

export default Services;
