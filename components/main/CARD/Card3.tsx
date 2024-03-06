"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import img from "./pet.png";
import {Button} from "@nextui-org/react";

import { CardBody, CardContainer, CardItem } from "@/components/sub/3d-card";
import { FaGithub, FaLink } from "react-icons/fa";

export function Card3() {
  return (
    
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-inherit dark:border-violet-600/[0.5] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 "
        >
          Hover over this card to unleash the power of CSS perspective
          Hover over this card to unleash the power of CSS perspective
          

        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
src={img}
height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <Link 
          href="https://pet-nirvana.netlify.app/"
          >
          
          <Button color="primary" variant="bordered">
             Live Website <FaLink/>
      </Button>  
          
          </Link>
          <Link href="https://github.com/yogendrachowdary/JFSD-Pet-Nirvana-Frontend">
          <Button color="primary" variant="shadow">
    View Repository <FaGithub/>
      </Button> </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
