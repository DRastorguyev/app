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
          onClick={filterButtonHandler('ALL')}
        >
          Все
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('DONE')}
        >
          Готовые
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('UNDONE')}
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
          onClick={sortButtonHandler('ASC')}
        >
          <i className='fas fa-chevron-up'></i>
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10 }}
          type='ghost'
          shape='round'
          onClick={sortButtonHandler('DESC')}
        >
          <i className='fas fa-chevron-down'></i>
        </Button>
      </div>
    </div>
  );
};

export default MySort;
