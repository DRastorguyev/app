import React from "react";
import cl from "../button/MyButton.module.css";

const MyButton = ({ children, current, onClick, style }) => {
  return (
    <button
      style={style}
      onClick={onClick} 
      className={current ? [cl.myBtn, cl.activePaginateButton].join(' ') : cl.myBtn}
    >
      {children}
    </button>
  );
};

export default MyButton;