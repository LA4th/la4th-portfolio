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
          <li key={index}>
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
        <ul>
          <h1>{techStack[0].category}</h1>
          {renderFrontEnd()}
        </ul>
      </div>
    </div>
  );
};