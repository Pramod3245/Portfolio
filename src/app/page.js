"use client";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./HeroSection";
import { motion } from 'framer-motion';
import About from "./About";
import ProjectsPage from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";
import { BackgroundBeams } from "./backChk";

export default function Home() {
  useEffect(() => {
    document.title = "Pramod Portfolio";
  }, []);
  
  return (
    <div className="relative">
      <BackgroundBeams className="z-0" />
      <div className="relative z-10">
        <HeroSection />
        <About />
        <ProjectsPage />
        <Skills />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}
