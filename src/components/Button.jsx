import React from "react";

export default function Button ({type, id, onClick, className, btnText, btnIcon}) {

  return (
    <button type={type} id={id} onClick={onClick} className={className}>
      {btnIcon}{btnText}
    </button>
  );
};