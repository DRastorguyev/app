import { Button } from 'antd';
import React from 'react';
import cl from '../filter/MyFilter.module.css';

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
        <Button
          style={{ marginRight: 10 }}
          onClick={filterButtonHandler('ALL')}
        >
          ALL
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={filterButtonHandler('DONE')}
        >
          DONE
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={filterButtonHandler('UNDONE')}
        >
          UNDONE
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: 5, fontSize: 15 }}>Сортировать по дате</p>
        <Button onClick={sortButtonHandler('ASC')}>
          <i class='fas fa-chevron-up'></i>
        </Button>
        <Button onClick={sortButtonHandler('DESC')}>
          <i class='fas fa-chevron-down'></i>
        </Button>
      </div>
    </div>
  );
};

export default MyFilter;
