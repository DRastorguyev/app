import React from "react";
import cl from "../button/MyButton.module.css";
import { Button } from "antd";


const MyButton = ({ children, current, onClick, style, ...props }) => {
  return (
    <Button
      style={{color: '#000000'}}
      {...props}
      onClick={onClick} 
      className={current ? [cl.myBtn, cl.activePaginateButton].join(' ') : cl.myBtn}
    >
      {children}
    </Button>
  );
};

export default MyButton;