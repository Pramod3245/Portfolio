import React from 'react';
import { DirectionAwareHover } from '../components/ui/direction-aware-hover';

import sign from '../../public/images/Sign.jpeg'
import color from '../../public/images/color.png'
import bike from '../../public/images/bike.jpg'

const projects = [
  {
    name: 'Sign Language Translator',
    description: 'TensorFlow, OpenCV, Keras',
    githubLink: 'https://github.com/Pramod3245/Sign-Language-Detection',
    imageUrl: sign, // Replace with actual image URL
  },
  {
    name: 'Mobile application for riders (Ridem8)',
    description: 'Mobile application (RIDEM8)',
    githubLink: 'https://github.com/Pramod3245/ridem8app',
    imageUrl: bike, // Replace with actual image URL
  },
  {
    name: 'Color Change detector',
    description: 'built using open cv to detect color in real time',
    githubLink: 'https://github.com/Pramod3245/Color-detection',
    imageUrl: color, // Replace with actual image URL
  }
];

const Projects = () => {
  return (
    <div className="text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <DirectionAwareHover 
              key={index} 
              imageUrl={project.imageUrl}
              children={
                <>
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">View on GitHub</a>
                </>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
