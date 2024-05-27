"use client";

import React from "react";
import { FlipWords } from "../components/ui/flip-words";  // Ensure correct import path for FlipWords

function HeroSection() {
  const words = [
    "innovative",
    "creative",
    "passionate-developer",
    "experienced-developer",
    "problem-solver",
    "team player",
    "tech enthusiast",
    "results-driven"
  ];
  

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-white text-center">
        Welcome to My Portfolio! <br />
        I'm Pramod L Malagi, I am
        <FlipWords words={words} />
        <br />
      </div>
    </div>
  );
}

export default HeroSection;
