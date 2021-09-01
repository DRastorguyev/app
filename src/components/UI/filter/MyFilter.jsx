import React from "react";
import MyButton from "../button/MyButton";
import cl from "../filter/MyFilter.module.css";

const MyFilter = ({ setFilter }) => {
  const filterButtonHandler = (filterType) => {
    return () => {
      setFilter((filterState) => ({
        ...filterState,
        filterType,
      }));
    };
  };

  const sortButtonHandler = (sortDirection) => {
    return () => {
      setFilter((filterState) => ({
        ...filterState,
        sortDirection,
      }));
    };
  };

  return (
    <div className={cl.myFilter}>
      <div>
        <MyButton onClick={filterButtonHandler("ALL")}>ALL</MyButton>
        <MyButton onClick={filterButtonHandler("DONE")}>DONE</MyButton>
        <MyButton onClick={filterButtonHandler("UNDONE")}>UNDONE</MyButton>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: 5, fontSize: 15 }}>Сортировать по дате</p>
        <MyButton onClick={sortButtonHandler("ASC")}>
          <i class="fas fa-chevron-up"></i>
        </MyButton>
        <MyButton onClick={sortButtonHandler("DESC")}>
          <i class="fas fa-chevron-down"></i>
        </MyButton>
      </div>
    </div>
  );
};

export default MyFilter;
