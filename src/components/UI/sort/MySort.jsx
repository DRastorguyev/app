import React from "react";
import MyButton from "../button/MyButton";
import cl from "../sort/MySort.module.css";

const MySort = ({ setFilter }) => {
  const filterButtonHandler = (filterType) => {
    return () => {
      setFilter((filterState) => ({ ...filterState, filterType }));
    };
  };

  const sortButtonHandler = (sortDirection) => {
    return () => {
      setFilter((filterState) => ({ ...filterState, sortDirection }));
    };
  };

  return (
    <div className={cl.mySort}>
      <div>
        <MyButton onClick={filterButtonHandler("ALL")}>Все</MyButton>
        <MyButton onClick={filterButtonHandler("DONE")}>Готовые</MyButton>
        <MyButton onClick={filterButtonHandler("UNDONE")}>Активные</MyButton>
      </div>
      <div className={cl.sort__btn}>
        <p style={{ marginRight: 5 }}>Отсортировать по дате</p>
        <MyButton onClick={sortButtonHandler("ASC")}>
          <i className="fas fa-chevron-up"></i>
        </MyButton>
        <MyButton onClick={sortButtonHandler("DESC")}>
          <i className="fas fa-chevron-down"></i>
        </MyButton>
      </div>
    </div>
  );
};

export default MySort;