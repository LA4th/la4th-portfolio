import { li } from 'motion/react-client';
import React from 'react';


export default function TheTechStacks () {
  const techStack = [
    {
      category: "Frontend",
      technologies: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "Vite"
      ],
      icons: [
        "/icons/frontend/html-5-svgrepo-com.svg",
        "/icons/frontend/css-3-svgrepo-com.svg",
        "/icons/frontend/tailwind-svgrepo-com.svg",
        "/icons/frontend/javascript-svgrepo-com.svg",
        "/icons/frontend/react-svgrepo-com.svg",
        "/icons/frontend/vitejs-svgrepo-com.svg"
      ],
      alt: [
        "HTML_img",
        "CSS3_img",
        "Tailwindcss_img",
        "JavaScript_img",
        "ReactJs_img",
        "ViteJs_img"
      ]
    }
  ];

  const renderFrontEnd = () => {

    return (
      techStack[0].icons.map((icon, index) => {
        return (
          <li key={index} className='flex flex-col items-center'>
            <img src={icon} alt={techStack[0].alt[index]} className='w-10 h-10' />
            <span className='text-white'>{techStack[0].technologies[index]}</span>
          </li>
        );
      })
    );
  };

  return (
    <div>
      <div>
        <h1>skills</h1>
        <hr />
      </div>
      <div>
        {/* FRONTEND */}
        <ul className='w-1/2 max-w-full flex flex-col items'>
          <h1 className='text-white text-center text-2xl font-bold'>{techStack[0].category}</h1>
          <div className='flex flex-row flex-wrap justify-center gap-x-5'>
            {renderFrontEnd()}
          </div>
        </ul>
      </div>
    </div>
  );
};