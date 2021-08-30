import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput'


const TodoForm = ({create}) => {

  const [todo, setTodo] = useState({title: ''})

  const addNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      ...todo, id: Date.now()
    }
    create(newTodo)
    setTodo({title: ''})
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MyInput
          // onKeyDown={e => {
          //   console.log(e)
          //   if(e.code !== 'Enter') return
          //   console.log(e)
          //   e.preventDefault()
          //   addNewTodo()
          // }} - submit on 'Enter'
          onChange={e => setTodo({...todo, title: e.target.value})}
          value={todo.title}
          type="text" 
        />
        <MyButton onClick={addNewTodo}>OK</MyButton>
      </form>
    </div>
  );
};

export default TodoForm;