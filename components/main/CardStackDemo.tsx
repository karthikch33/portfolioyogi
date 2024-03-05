"use client";
import { cn } from "@/utils/cn";
import { CardStack } from "../sub/card-stack";
export function CardStackDemo() {
  return (
    <div className="mt-20 mb-20 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
    {
      id: 0,
      name: "Director, School of Competitive Coding",
      designation: "KL University",
      content: (
        <p>
          As the Director of the School of Competitive Coding at KLU, I organized and led various <Highlight> coding events</Highlight> and <Highlight>bootcamps</Highlight> aimed at enhancing students' programming skills.
        </p>
      ),
    },
    {
      id: 1,
      name: "Lead at FOCUS, The Student Governance Body",
      designation: "KL University",
      content: (
        <p>
          Serving as the Lead at FOCUS, The Student Governance Body at KL University, I spearheaded numerous student <Highlight> governance initiatives</Highlight> and projects. 
        </p>
      ),
    },
    {
      id: 2,
      name: "Under Officer",
      designation: "NCC, 22(A) Battalion, Tenali",
      content: (
        <p>
          As an Under Officer in the National Cadet Corps (NCC), 22(A) Battalion, Tenali, I played a pivotal role in fostering <Highlight>discipline</Highlight>, <Highlight>leadership</Highlight>, and <Highlight>camaraderie</Highlight> among cadets. 
        </p>
      ),
    },
];
