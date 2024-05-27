"use client";
import React, { useState } from 'react';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const certificates = [
  {
    id: 1,
    title: 'Machine Learning with Python - IBM',
    category: 'Machine Learning',
    url: 'https://www.coursera.org/account/accomplishments/certificate/J7DH84E6ZVT3',
  },
  {
    id: 2,
    title: 'Prepare Data for Exploration - Google',
    category: 'Data Analytics',
    url: 'https://www.coursera.org/account/accomplishments/certificate/G834TCTYRFQK',
  },
  {
    id: 3,
    title: 'Ask Questions to Make Data-Driven Decisions - Google',
    category: 'Data Analytics',
    url: 'https://www.coursera.org/account/accomplishments/certificate/GMC7JJG92CEC',
  },
  {
    id: 4,
    title: 'Foundations: Data, Data, Everywhere - Google',
    category: 'Data Analytics',
    url: 'https://www.coursera.org/account/accomplishments/certificate/PRCD2RUPEU6M',
  },
  {
    id: 5,
    title: 'Basic Image Classification with TensorFlow - Coursera',
    category: 'Machine Learning',
    url: 'https://www.coursera.org/account/accomplishments/certificate/4KAAV2PCCXW9',
  },
  {
    id: 6,
    title: 'Algorithmic Toolbox - UC San Diego',
    category: 'Programming Languages',
    url: 'https://www.coursera.org/account/accomplishments/certificate/827S24844QSV',
  },
  {
    id: 7,
    title: 'Cpp Programming - Udemy',
    category: 'Programming Languages',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-164d9121-4ca5-4f62-9efe-160950d7fe10.pdf',
  },
  {
    id: 8,
    title: 'Arduino - Udemy',
    category: 'Others',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-dcc11f91-7d1d-4d72-ae5d-93f1f3705986.pdf',
  },
  {
    id: 9,
    title: 'Visual Elements of User Interface Design - Calarts',
    category: 'Others',
    url: 'https://www.coursera.org/account/accomplishments/certificate/78UGAKYXSZ4H',
  },
  {
    id: 10,
    title: 'Python Data Structures - University of Michigan',
    category: 'Programming Languages',
    url: 'https://www.coursera.org/account/accomplishments/certificate/9G8SFK2578WC',
  },
  {
    id: 11,
    title: 'Python Basics - University of Michigan',
    category: 'Programming Languages',
    url: 'https://www.coursera.org/account/accomplishments/certificate/PWH7GKQTVSTN',
  },
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCertificates = selectedCategory === 'All' ? certificates : certificates.filter(certificate => certificate.category === selectedCategory);

  const categories = ['All', 'Machine Learning', 'Data Analytics', 'Programming Languages', 'Others'];

  return (
    <div className='py-12'>
      <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center text-white'>Certificates</h2>
      <div className='flex justify-center space-x-4 mb-4'>
        {categories.map(category => (
          <div 
            key={category} 
            className={`cursor-pointer ${selectedCategory === category ? 'text-white font-bold' : 'text-gray-300'}`} 
            onClick={() => handleClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto'>
        {filteredCertificates.map((certificate) => (
          <HoverBorderGradient
            key={certificate.id}
            containerClassName="rounded-full"
            as="div"
            className=" text-black dark:text-white p-4"
          >
            <a href={certificate.url} target='_blank' rel='noopener noreferrer' className='text-[#76ABAE] font-semibold'>{certificate.title}</a>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
}
