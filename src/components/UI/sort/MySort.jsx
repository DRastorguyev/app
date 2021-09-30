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
          style={{ marginRight: 10, color: '#fff' }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('')}
        >
          All
        </Button>
        <Button
          size='small'
          style={{ marginRight: 10, color: '#fff' }}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('done')}
        >
          Done
        </Button>
        <Button
          size='small'
          style={{ color: '#fff'}}
          type='ghost'
          shape='round'
          onClick={filterButtonHandler('undone')}
        >
          In process
        </Button>
      </div>
      <div className={cl.sort__btn}>
        <p style={{ marginRight: 23, marginBottom: 0, color: '#fff' }}>Sort by date</p>
        <Button
          size='small'
          style={{ marginRight: 10, color: '#fff'}}
          type='ghost'
          shape='round'
          onClick={sortButtonHandler('asc')}
        >
          <i className='fas fa-chevron-up'></i>
        </Button>
        <Button
          size='small'
          style={{ color: '#fff'}}
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
