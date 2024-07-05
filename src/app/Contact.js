import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">Contact</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <FaLinkedin className="w-8 h-8 text-blue-500" />
            <a href="https://www.linkedin.com/in/pramod1malagi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="w-8 h-8 text-gray-800" />
            <a href="https://github.com/Pramod3245" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">GitHub</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaCode className="w-8 h-8 text-yellow-600" />
            <a href="https://leetcode.com/u/pramod_1221/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">LeetCode</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="w-8 h-8 text-red-600" />
            <span className="text-red-600">pramod97404@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="w-8 h-8 text-green-600" />
            <span className="text-green-600">+91-78929 96607</span>
          </div>
        </div>
      </div>
    </div>
  );
}
