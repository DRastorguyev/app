import React from 'react';
import { Input } from 'antd';


const MyInput = (props) => {
  
  return (
    <div>
      <Input {...props} placeholder='Buy milk...' />
    </div>
  );
};

export default MyInput;