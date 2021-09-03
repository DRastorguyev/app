import React from 'react';
import cl from '../input/MyInput.module.css'
import { Input } from 'antd';


const MyInput = (props) => {
  
  return (
    <div>
      <Input {...props} className={cl.myInput} placeholder='Купить молочка...' />
    </div>
  );
};

export default MyInput;