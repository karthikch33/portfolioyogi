"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex justify-center flex-wrap gap-6">
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>

      </div>
    </div>
  );
};

export default Projects;
