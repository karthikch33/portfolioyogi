"use client";
import React from "react";
import { Card6 } from "./ProjectCards/Card6";
import { Card1 } from "./ProjectCards/Card1";
import { Card2 } from "./ProjectCards/Card2";
import { Card3 } from "./ProjectCards/Card3";
import { Card4 } from "./ProjectCards/Card4";
import { Card5 } from "./ProjectCards/Card5";

const Projects = () => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center"
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex justify-center flex-wrap gap-6">
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>

      </div>
    </div>
  );
};

export default Projects;
