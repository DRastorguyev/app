import React from "react";
import cl from "../button/MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
