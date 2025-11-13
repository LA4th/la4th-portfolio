import React from "react";
import Button from "../components/Button.jsx";
import Magnet from "./ui/Magnet/Magnet.jsx";
import { FaDownload } from "react-icons/fa";
import RotatingText from "./ui/RotatingText/RotatingText.jsx";

export default function TheHeader () {
  const header = 
  {
    navBar: ["Home", "Skills", "Projects", "Contacts"],
    btnResumeText: "Resume",    
  };

  const buttonNavBar = () => {
    return (
      header.navBar.map((value, index) => {
        return (
          <li key={index}>
            <a href="#" className="p-2.5 hover:border-b-3 font-bold text-white hover:text-vintageLightBlue transition-all duration-150 ease-in-out transform">{value}</a>
          </li>
        );
      })
    );
  };
  
  return (
    <div className="flex flex-row items-center justify-between">
      <a href="#">
        <RotatingText
          texts={['WELCOME!', 'LA4TH']}
          mainClassName="text-vintageLightBlue font-bold text-2xl font-stretch-condensed"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </a>
      <div className="flex flex-row items-center gap-x-20">
        <ul className="flex flex-row gap-x-5">
          {buttonNavBar()}
        </ul>
        <Magnet padding={100} disabled={false} magnetStrength={5}>
          <Button type="button" id="btnResume" onClick={()=>{}} className="text-white font-bold bg-vintageLightBlue px-7 py-1.5 rounded-md cursor-pointer flex flex-row gap-x-1.5 items-center justify-center hover:scale-105 active:scale-100 transition duration-150 transform" btnText={header.btnResumeText} btnIcon={<FaDownload />} />
        </Magnet> 
      </div>
    </div>
  );
};