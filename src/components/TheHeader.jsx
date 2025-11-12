import React from "react";
import Button from "../components/Button.jsx";

export default function TheHeader () {
  const header = 
  {
    logo: "LA4TH",
    navBar: ["Home", "Skills", "Projects", "Contacts"],
    btnResumeText: "Resume",
    link: ""      
  };

  const buttonNavBar = () => {
    return (
      header.navBar.map((value, index) => {
        return (
          <li key={index}>
            <a href="">{value}</a>
          </li>
        );
      })
    );
  };
  
  return (
    <>
      <a href="">{header.logo}</a>
      <ul>
        {buttonNavBar()}
      </ul>
      <Button />
    </>
  );
};