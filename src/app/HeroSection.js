"use client";

import React from "react";
import { FlipWords } from "../components/ui/flip-words";  

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
    <div className="relative h-[40rem] flex justify-center items-center px-4">
      <div className="absolute top-4 right-4">
        <a 
          href="https://www.linkedin.com/in/pramod1malagi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-500 hover:scale-110 transition-transform duration-200"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Get in touch with me
        </a>
      </div>
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
