import React from 'react';
import { Input } from 'antd';


const MyInput = (props) => {
  
  return (
    <div>
      <Input {...props} placeholder='Купить молочка...' />
    </div>
  );
};

export default MyInput;