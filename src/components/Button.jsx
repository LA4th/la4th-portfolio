import React from "react";

export default function Button ({type, id, onClick, style}) {

  return (
    <button type={type} id={id} onClick={onClick} className={style}></button>
  );
};