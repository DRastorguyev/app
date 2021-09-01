import React from 'react';
import cl from '../input/MyInput.module.css'


const MyInput = (props) => {
  
  return (
    <div>
      <input {...props} className={cl.myInput} placeholder='Купить молочка...' />
    </div>
  );
};

export default MyInput;