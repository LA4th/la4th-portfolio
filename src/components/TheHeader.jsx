import React, {useState} from "react";
import Button from "../components/Button.jsx";
import Magnet from "./ui/Magnet/Magnet.jsx";
import { FaDownload } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import RotatingText from "./ui/RotatingText/RotatingText.jsx";
import UseMobileView from "./hooks/useMobileView.jsx";

export default function TheHeader() {
  const [open, setOpen] = useState(false);

  const mobileView = UseMobileView();

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
    return (
      <Button
        id="btnBurger"
        onClick={() => setOpen(!open)}
        btnIcon={!open ? <GiHamburgerMenu /> : <IoCloseSharp />}
        className="md:hidden text-white text-5xl absolute z-20 top-0 right-0"
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
            <Button
              type="button"
              id="btnResume"
              onClick={() => {}}
              className="text-white font-bold bg-vintageLightBlue px-7 py-1.5 rounded-md cursor-pointer flex flex-row gap-x-1.5 items-center justify-center hover:scale-105 active:scale-100 transition duration-150 transform"
              btnText={header.btnResumeText}
              btnIcon={<FaDownload />}
            />
          </Magnet>
        </div>        
      </div>

      {/* Burger (Mobile Only) */}
      {buttonBurger()}
      {/* Mobile Menu */}
      <div className={`md:hidden absolute z-10 top-0 right-0 w-1/2 max-w-full min-h-screen flex flex-col gap-y-5 pt-20 px-10 bg-vintageBlack transition-all duration-300 transform ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <ul className="flex flex-col gap-y-5 text-center">
          {buttonNavBar()}
        </ul>

        <Button
          type="button"
          id="btnResume"
          onClick={() => {}}
          className="text-white font-bold bg-vintageLightBlue px-7 py-1.5 rounded-md cursor-pointer flex flex-row gap-x-1.5 items-center justify-center hover:scale-105 active:scale-100 transition duration-150 transform"
          btnText={header.btnResumeText}
          btnIcon={<FaDownload />}
        />
      </div>
    </header>
  );
};
