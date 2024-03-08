import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface ContentItem {
  title: string;
  subtitle: string; // New subtitle property
  description: string;
  content?: React.ReactNode | any;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
    className="h-[30rem] overflow-y-auto flex justify-center relative space-x-20 rounded-md p-7"
    ref={ref}
    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
  >
    <div className="div relative flex items-start">
      <div className="max-w-full w-full h-full">
        {content.map((item, index) => (
          <div key={item.title + index} className="my-20 text-white">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-3xl font-bold text-slate-100 mb-6"
            >
              {item.title}
            </motion.h2>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {item.subtitle}
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-lg text-slate-300 max-w-lg mt-4"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-40" />
      </div>
    </div>
    <motion.div
      animate={{
        background: linearGradients[activeCard % linearGradients.length],
      }}
      className={cn(
        "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
        contentClassName
      )}
    >
      {content[activeCard].content ?? null}
    </motion.div>
  </motion.div>
  );
};
