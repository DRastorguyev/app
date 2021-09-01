import React from "react";
import cl from "../button/MyButton.module.css";

const MyButton = ({ children, current, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={current ? [cl.myBtn, cl.activePaginateButton].join(' ') : cl.myBtn}
    >
      {children}
    </button>
  );
};

export default MyButton;
