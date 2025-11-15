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
      logos: [
        "/logo/frontend/html-5-svgrepo-com.svg",
        "/logo/frontend/css-3-svgrepo-com.svg",
        "/logo/frontend/tailwind-svgrepo-com.svg",
        "/logo/frontend/javascript-svgrepo-com.svg",
        "/logo/frontend/react-svgrepo-com.svg",
        "/logo/frontend/vitejs-svgrepo-com.svg"
      ],
      alt: [
        "HTML_img",
        "CSS3_img",
        "Tailwindcss_img",
        "JavaScript_img",
        "ReactJs_img",
        "ViteJs_img"
      ]
    },
    {
      category: "Backend",
      technologies: [
        "PHP",
        "MySQL",
        "MongoDB"
      ],
      logos: [
        "/logo/backend/php-svgrepo-com.svg",
        "/logo/backend/mysql-logo-svgrepo-com.svg",
        "/logo/backend/mongodb-svgrepo-com.svg"
      ],
      alt: [
        "php_img",
        "mysql_img",
        "mongodb_img"
      ]
    },
    {
      category: "Development Tools",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Docker",
        "Vercel",
        "Figma"
      ],
      logos:[
        "/logo/tools/git-svgrepo-com.svg",
        "/logo/tools/github-142-svgrepo-com.svg",
        "/logo/tools/vscode-svgrepo-com.svg",
        "/logo/tools/docker-svgrepo-com.svg",
        "/logo/tools/vercel-svgrepo-com.svg",
        "/logo/tools/figma-svgrepo-com.svg"
      ],
      alt:[
        "git_img",
        "github_img",
        "vscode_img",
        "docker_img",
        "vercel_img",
        "figma_img"
      ]
    }
  ];

  const renderFrontEnd = () => {
    return (
      techStack[0].logos.map((logo, index) => {
        return (
          <li key={index} className='flex flex-col items-center'>
            <div className='bg-white p-1 rounded-md'>
              <img src={logo} alt={techStack[0].alt[index]} className='w-8 h-8' />
            </div>
            <span className='text-white'>{techStack[0].technologies[index]}</span>
          </li>
        );
      })
    );
  };
  const renderBackEnd = () => {
    return(
      techStack[1].logos.map((logo, index) => {
        return (
          <li key={index} className='flex flex-col items-center'>
            <div className='bg-white p-1 rounded-md'>
              <img src={logo} alt={techStack[1].alt[index]} className='w-8 h-8' />
            </div>
            <span className='text-white'>{techStack[1].technologies[index]}</span>
          </li>
        );
      })
    );
  };
  const renderDevelopmentTools = () => {
    return(
      techStack[2].logos.map((logo, index) => {
        return (
          <li key={index} className='flex flex-col items-center'>
            <div className='bg-white p-1 rounded-md'>
              <img src={logo} alt={techStack[2].alt[index]} className='w-8 h-8' />
            </div>
            <span className='text-white'>{techStack[2].technologies[index]}</span>
          </li>
        );
      })
    );
  };

  return (
    <div className='w-full max-w-full flex flex-col'>
      <div className='w-full flex flex-row items-center gap-x-2'>
        <h1 className='text-vintageLightBlue text-5xl font-bold'>skills</h1>
        <hr className='w-full border-3 border-vintageLightBlue rounded-xl' />
      </div>
      <div className='w-full min-h-screen flex flex-col gap-y-5 items-center justify-center'>
        <div className='flex flex-col gap-y-5 md:flex-row'>
          {/* FRONTEND */}
          <ul className='flex flex-col gap-y-5 md:w-1/2'>
            <h1 className='text-white text-center text-2xl font-bold'>{techStack[0].category}</h1>
            <div className='flex flex-row flex-wrap justify-center gap-x-10 gap-y-5'>
              {renderFrontEnd()}
            </div>
          </ul>
          {/* BACKEND */}
          <ul className='flex flex-col gap-y-5 md:w-1/2'>
            <h1 className='text-white text-center text-2xl font-bold'>{techStack[1].category}</h1>
            <div className='flex flex-row flex-wrap justify-center gap-x-10 gap-y-5'>
              {renderBackEnd()}
            </div>
          </ul>
        </div>
        {/* DEVELOPMENT TOOLS */}
        <ul className='flex flex-col gap-y-5'>
          <h1 className='text-white text-center text-2xl font-bold'>{techStack[2].category}</h1>
          <div className='flex flex-row flex-wrap justify-center gap-x-10 gap-y-5'>
            {renderDevelopmentTools()}
          </div>
        </ul>
      </div>
    </div>
  );
};