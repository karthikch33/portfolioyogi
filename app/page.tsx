import Certifications from "@/components/main/Certifications";
import Hero from "@/components/main/Hero";
import HeroParallaxDemo from "@/components/main/Para";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />

          <Skills />
          <HeroParallaxDemo />
          <Projects />
        <Certifications/>

        </div>
    </main>
  );
}