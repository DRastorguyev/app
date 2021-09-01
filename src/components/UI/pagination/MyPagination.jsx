import React from "react";
import MyButton from "../button/MyButton";
import cl from "../pagination/MyPagination.module.css";

const MyPagination = ({lastPage, ...props}) => {

  const pageArr = []

  for (let i = 1; i <= lastPage; i++) pageArr.push(i)

  


  return (
    <div className={cl.myPagination}>
      <MyButton onClick={() => props.setPage(1)} >
        <i className="fas fa-angle-double-left"></i>
      </MyButton>
      {pageArr.map(page => 
        <MyButton  
          current={page === props.page ? true : false} 
          onClick={() => props.setPage(page)} 
        >
        {page}
        </MyButton>
      )}
      <MyButton 
        onClick={() => props.setPage(lastPage)}
      >
        <i className="fas fa-angle-double-right"></i>
      </MyButton>
    </div>
  );
};

export default MyPagination;
