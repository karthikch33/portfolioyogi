import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import HeroParallaxDemo from "@/components/main/Para";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { TextRevealCardPreview } from "@/components/main/TextRevealCardPreview";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <HeroParallaxDemo/>
        <Projects />

      </div>
    </main>
  );
}
