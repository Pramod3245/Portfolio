"use client";

import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

function HeroSection() {
  const words = [
    "Innovative Thinker",
    "Creative Designer",
    "Problem Solver",
    "Team Collaborator",
    "Tech Enthusiast",
    "Results-Oriented"
  ];

  return (
    <div 
      className="relative h-[40rem] flex justify-center items-center px-4 bg-cover bg-top animate-scroll" 
      style={{ backgroundImage: "url('/path/to/asteroids.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute top-4 right-4 z-10">
        <a 
          href="https://www.linkedin.com/in/pramod1malagi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-300 hover:scale-110 transition-transform duration-200"
          aria-label="Connect with me on LinkedIn"
        >
          <FaLinkedin size={32} /> {/* LinkedIn icon */}
        </a>
      </div>
      <div className="text-4xl mx-auto font-semibold text-white text-center leading-relaxed z-10">
        Welcome to My Portfolio! <br />
        I'm <span className="text-purple-400">Pramod L Malagi</span>, <br />
        <span className="font-bold">
          A developer who is a
        </span>
        <FlipWords words={words} singleWord />
      </div>
    </div>
  );
}

export default HeroSection;
