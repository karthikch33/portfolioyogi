import Hero from "@/components/main/Hero";
import HeroParallaxDemo from "@/components/main/Para";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { ThreeDCardDemo } from "@/components/main/ThreeDCardDemo";


export default function Home() {
  return (
    <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <HeroParallaxDemo />
          <Projects />
          <ThreeDCardDemo/>
        </div>
    </main>
  );
}