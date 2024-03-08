import { motion } from "framer-motion";
import { FaDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { slideInFromLeft } from "@/utils/motion";
import { TypewriterEffectSmooth } from "../sub/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "{ Full Stack Developer }",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500",
    },
  ];

  const words2 = [
    {
      text: "& A",
    },
    {
      text: "Cloud Enthusiast",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TypewriterEffectSmooth words={words} />
      <TypewriterEffectSmooth words={words2} />

      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[600px] text-center"
      >
        Transforming ideas into code and with strong DSA and Web Development skills. Check out my projects, skills & Certifications.
      </motion.p>

      <motion.div
  className="flex flex-col md:flex-row items-center justify-center gap-5 text-lg font-medium"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }} // Increased delay here
>
  <a
    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10"
    href="/Resume.pdf"
    download
  >
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      Download CV
    </span>
    <FaDownload className="text-white text-2xl group-hover:translate-y-0 transition" />
  </a>

  <a
    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
    href="https://www.linkedin.com/in/yogendra-chowdary-ab37a4248/"
    target="_blank"
  >
    <FaLinkedin className="text-white text-2xl" />
  </a>

  <a
    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
    href="https://github.com/yogendrachowdary"
    target="_blank"
  >
    <FaGithubSquare className="text-white text-2xl" />
  </a>
</motion.div>

    </div>
  );
}
