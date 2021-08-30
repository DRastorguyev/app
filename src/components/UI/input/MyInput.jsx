import React from 'react';
import classes from '../input/MyInput.module.css'


const MyInput = (props) => {
  
  return (
    <div>
      <input {...props} className={classes.myInput} placeholder='Купить молочка...' />
    </div>
  );
};

export default MyInput;