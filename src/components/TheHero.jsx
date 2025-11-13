import React from "react";
import LightRays from "./ui/LightRays/LightRays.jsx";
import Button from "./Button.jsx";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import SplitText from "./ui/SplitText/SplitText.jsx";

export default function TheHero () {
  const hero = {
    name: "Lorenzo Laforteza",
    role: "Knowlegable Web Developer "
  };

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#4DA8DA"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <div className="w-[900px] max-w-full m-auto absolute z-10 inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="text-white text-center text-5xl font-stretch-condensed flex flex-row items-center gap-x-2">
            Hello, I'm 
            <SplitText
              text={hero.name}
              className="text-vintageLightBlue font-bold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <p className="text-white text-center font-stretch-condensed">
            <span className="text-vintageLightBlue font-bold">  
              {hero.role} 
            </span>  
              with experience in front-end and back-end development, focusing on practical and efficient solutions that are easy to maintain and scale.
          </p>
          <a href="#" className="text-white font-bold px-10 py-1.5 rounded-md bg-vintageLightBlue hover:scale-105 active:scale-100 transition duration-150 transform">Let's Connect</a>
          <div className="flex flex-row gap-x-2">
            <a href="#"><FaGithubSquare className="text-white text-4xl hover:text-vintageLightBlue transition duration-150 transform" /></a>
            <a href="#"><FaLinkedin className="text-white text-4xl hover:text-vintageLightBlue transition duration-150 transform" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};