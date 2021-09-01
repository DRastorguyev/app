import React from "react";
import MyButton from "../button/MyButton";
import cl from "../pagination/MyPagination.module.css";

const MyPagination = () => {
  return (
    <div className={cl.myPagination}>
      <MyButton>
        <i class="fas fa-angle-double-left"></i>
      </MyButton>
      <MyButton>1</MyButton>
      <MyButton>2</MyButton>
      <MyButton>3</MyButton>
      <MyButton>
        <i class="fas fa-angle-double-right"></i>
      </MyButton>
    </div>
  );
};

export default MyPagination;
