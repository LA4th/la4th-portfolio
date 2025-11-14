import React, {useState, useEffect} from "react";
import Button from "../components/Button.jsx";
import Magnet from "./ui/Magnet/Magnet.jsx";
import { FaDownload } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import RotatingText from "./ui/RotatingText/RotatingText.jsx";

export default function TheHeader() {
  const [open, setOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    handleSize();

    window.addEventListener("resize", handleSize);
    
    return () => window.removeEventListener("resize", handleSize);
  }, [])

  const header = {
    navBar: ["Home", "Skills", "Projects", "Contacts"],
    btnResumeText: "Resume",
  };

  const buttonNavBar = () => {
    return header.navBar.map((value, index) => (
      <li key={index}>
        <a href="#" className={`text-white font-bold ${mobileView ? "active:text-vintageLightBlue" : "hover:text-vintageLightBlue hover:border-b-3 transition-all duration-150 ease-in-out transform"}`}>{value}</a>
      </li>
    ));
  };

  const buttonBurger = () => {
    if(!open) {
      return (
        <Button
          id="btnBurger"
          onClick={() => setOpen(!open)}
          btnIcon={<GiHamburgerMenu />}
          className="md:hidden text-white text-5xl absolute top-0 right-0"
        />
      );
    } else {
      return (
        <Button
          id="btnBurger"
          onClick={() => setOpen(!open)}
          btnIcon={<IoCloseSharp />}
          className="md:hidden absolute z-20 top-0 right-0 text-white text-5xl"
        />
      );
    }
  };

  const buttonResume = () => {
    return(
      <Button
        type="button"
        id="btnResume"
        onClick={() => {}}
        className="text-white font-bold bg-vintageLightBlue px-7 py-1.5 rounded-md cursor-pointer flex flex-row gap-x-1.5 items-center justify-center hover:scale-105 active:scale-100 transition duration-150 transform"
        btnText={header.btnResumeText}
        btnIcon={<FaDownload />}
      />
    );
  };

  return (
    <header className="relative w-full">
      <div className="flex flex-row items-center justify-between">

        {/* Logo */}
        <a href="#">
          <RotatingText
            texts={['WELCOME!', 'LA4TH']}
            mainClassName="text-vintageLightBlue font-bold text-3xl"
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

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-x-10">
          <ul className="flex flex-row gap-x-5">{buttonNavBar()}</ul>

          <Magnet padding={30} disabled={mobileView} magnetStrength={5}>
            {buttonResume()}
          </Magnet>
        </div>        
      </div>

      {/* Burger (Mobile Only) */}
      {buttonBurger()}

      <div className={`md:hidden absolute z-10 top-0 right-0 w-1/2 max-w-full min-h-screen flex flex-col gap-y-5 items-center pt-20 bg-vintageBlack transition-all duration-300 transform ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <ul className="flex flex-col gap-y-5 text-center">
          {buttonNavBar()}
        </ul>

        {buttonResume()}
      </div>
    </header>
  );
};
