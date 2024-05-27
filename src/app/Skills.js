"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";

const Skills = () => {
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6"> {/* Center horizontally and add space between cards */}
          <BackgroundGradient className="rounded-3xl max-w-sm p-6 bg-zinc-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#76ABAE]">Frontend Development</h3>
            <ul className="list-disc ml-6 text-white">
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>React-Native</li>
            </ul>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-3xl max-w-sm p-6 bg-zinc-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#76ABAE]">Artificial Intelligence <br /> & Machine Learning</h3>
            <ul className="list-disc ml-6 text-white">
              <li>Open CV</li>
              <li>Tensorflow</li>
              <li>Pytorch</li>
              <li>scikit-learn</li>
            </ul>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-3xl max-w-sm p-6 bg-zinc-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#76ABAE]">Programming Languages </h3>
            <ul className="list-disc ml-6 text-white">
              <li>Python</li>
              <li>CPP</li>
              <li>C</li>
              <li>Verilog</li>
              <li>Embedded C</li>
            </ul>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Skills;
