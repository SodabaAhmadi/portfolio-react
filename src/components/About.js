import React from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

const url1='../assets/SodabaAhmadiCV.zip';
const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
      lg:gap-x-30 lg:gap-y-0 h-screen mb-12'>
      <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
         className="flex-1 bg-about bg-contain bg-no-repeat h-[610px]
      mix-blend-lighten bg-top"></motion.div>

      <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}} className='flex-1 ml-12'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4'>
          I'm a Full Stack Developer with over a year of experience.
        </h3>
        <p className=' mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Accusamus impedit ipsum aut quaerat totam similique modi.
        </p>

        <div className='flex gap-x-6 lg:gap-x-10 mb-6'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient '>
              {inView ?<CountUp start={0} end={4} duration={3} />:
              null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Years of<br/>
              Experience</div>
          </div>

          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ?<CountUp start={0} end={10} duration={3} />:
              null}
              K+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects<br/>
              Completed</div>
          </div>

          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ?<CountUp start={0} end={11} duration={3} />:
              null}
              K+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Satisfied<br/>
              Clients</div>
          </div>

        </div>
        <div className='flex gap-x-8 items-center'>
           {/* <a href="#" className='text-gradient btn-link'>My CV</a> */}
           <button className='btn btn-lg'><a href='https://drive.google.com/file/d/1jCaXlvVvYkbi6n1f78e6VyStZqma34gV/view?usp=sharing' target='_blank'>My CV</a></button>
           
          </div>
      </motion.div>
    </div>
    </div>
  </section>
  );
};

export default About;
