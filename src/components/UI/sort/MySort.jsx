import { Button } from 'antd';
import React from 'react';
import cl from '../sort/MySort.module.css';

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
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('')}
        >
          Все
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('done')}
        >
          Готовые
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('undone')}
        >
          Активные
        </Button>
      </div>
      <div className={cl.sort__btn}>
        <p style={{ marginRight: 5, marginBottom: 0 }}>Отсортировать по дате</p>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={sortButtonHandler('asc')}
        >
          <i className='fas fa-chevron-up'></i>
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={sortButtonHandler('desc')}
        >
          <i className='fas fa-chevron-down'></i>
        </Button>
      </div>
    </div>
  );
};

export default MySort;
