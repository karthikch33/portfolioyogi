"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Particle from "../main/Particle";
import img from "./hdimg.png";
import { TypewriterEffectSmoothDemo } from "../main/TypewriterEffectSmoothDemo";

const HeroContent = () => {
  return (
    <>
    <div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
        <Particle />
      </div>
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 w-full z-[20]"
    >
      
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        

          <TypewriterEffectSmoothDemo/>


      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
 <Image
  src={img}
  alt="work icons"
  width={400}
  height={400}
/>
      </motion.div>
    </motion.div>
    </>
  );
};

export default HeroContent;
