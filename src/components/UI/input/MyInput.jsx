import React from 'react';
import { Input } from 'antd';


const MyInput = (props) => {
  
  return (
    <div>
      <Input style={{borderRadius: 10, height: 35}} {...props} placeholder='Buy milk...' />
    </div>
  );
};

export default MyInput;