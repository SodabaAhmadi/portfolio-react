import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

import { FaGithub, FaCode } from "react-icons/fa";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 m-16 mt-6">
          <motion.div
           variants={fadeIn('right',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
            className="flex-1 flex flex-col gap-y-6
            mb-4 lg:mb-0">
            <div>
              <h2 className="h2 mb-2 leading-tight text-accent">
                My Latest
                <br />
                Works
              </h2>
              <p className="max-w-sm mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                in quo atque, aliquid quisquam fugit corrupti expedita soluta ea
                eos dicta cumque dolores.
              </p>
              <button className="btn btn-sm"><a href="https://github.com/SodabaAhmadi">View all Projects</a></button>
            </div>

            <div
              className="group relative overflow-hidden border-2
              border-white/50 rounded-xl h-[210px]"
            >
              <div
                className="group-hover:bg-black/70 w-full
                h-full absolute z-40 transition-all duration-300"
              ></div>

              <img
                className="group-hover:scale-125 transition-all
                duration-500"
                src={Img1}
                alt=""
              />

              <div
                className="absolute -bottom-full left-10
                group-hover:bottom-12 transition-all duration-500 z-50"
              >
                <span className="text-gradient">ReactJs Project</span>
              </div>

              <div
                className="absolute -bottom-full left-10
                group-hover:bottom-4 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Tour and Travel</span>
              </div>

              <div
                className="absolute -bottom-full right-8
                group-hover:bottom-6 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">
                  <div
                    className="flex text-[18px] gap-x-4 max-w-max mx-auto
                  lg:mx-0"
                  >
                    <a href="https://tour-and-travel-thirdproject.vercel.app/" target="_blank">
                      <FaCode />
                    </a>
                    <a href="https://github.com/SodabaAhmadi/Tour-and-Travel-thirdproject" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
           variants={fadeIn('left',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
          className="flex-1 flex flex-col gap-y-6 mt-9 ">
          <div
              className="group relative overflow-hidden border-2
              border-white/50 rounded-xl h-[210px]"
            >
              <div
                className="group-hover:bg-black/70 w-full
                h-full absolute z-40 transition-all duration-300"
              ></div>

              <img
                className="group-hover:scale-125 transition-all
                duration-500"
                src={Img2}
                alt=""
              />

              <div
                className="absolute -bottom-full left-10
                group-hover:bottom-12 transition-all duration-500 z-50"
              >
                <span className="text-gradient">ReactJs Project</span>
              </div>

              <div
                className="absolute -bottom-full left-10
                group-hover:bottom-4 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">CodeBook</span>
              </div>

              <div
                className="absolute -bottom-full right-8
                group-hover:bottom-6 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">
                  <div
                    className="flex text-[18px] gap-x-4 max-w-max mx-auto
                    lg:mx-0"
                  >
                    <a href="https://codebook-ul.netlify.app/" target="_blank">
                      <FaCode />
                    </a>
                    <a href="https://github.com/SodabaAhmadi/codebook" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </span>
              </div>
            </div>

            <div
              className="group relative overflow-hidden border-2
              border-white/50 rounded-xl h-[210px]"
            >
              <div
                className="group-hover:bg-black/70 w-full
                h-full absolute z-40 transition-all duration-300"
              ></div>

              <img
                className="group-hover:scale-125 transition-all
                duration-500"
                src={Img3}
                alt=""
              />

              <div
                className="absolute -bottom-full left-10
                group-hover:bottom-12 transition-all duration-500 z-50"
              >
                <span className="text-gradient">ReactJs Project</span>
              </div>

              <div
                className="absolute -bottom-full left-10
                group-hover:bottom-4 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Cinemate</span>
              </div>

              <div
                className="absolute -bottom-full right-8
                group-hover:bottom-6 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">
                  <div
                    className="flex text-[18px] gap-x-4 max-w-max mx-auto
                    lg:mx-0"
                  >
                    <a href="https://cinemate-ul.netlify.app/" target="_blank">
                      <FaCode />
                    </a>
                    <a href="https://github.com/SodabaAhmadi/cinemate-secondproject" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
