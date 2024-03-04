"use client";
import React from "react";
import { TextRevealCard} from "../sub/text-reveal-card";


export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center  rounded-2xl w-full">
      <TextRevealCard
        text="You understand the syntax"
        revealText="I decode the algorithms"
      > 
      </TextRevealCard>
    </div>
  );
}
