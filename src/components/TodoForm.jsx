import React, { useEffect, useState } from 'react';
import MyInput from './UI/input/MyInput';

const TodoForm = ({createTodo}) => {

  const [todoName, setTodoName] = useState('');
  const [error, setError] = useState('');


  const addNewTodo = (e) => {

    if (todoName.trim() === '') {
      setError('Форма пустая');
      setTimeout(() => setError(''), 3000);
    } else {
      createTodo(todoName)
      setTodoName('')
    }
  };


  return (
    <div>
      <form
        style={{
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        <MyInput
          onKeyDown={(e) => { 
            if (e.code !== 'Enter') return;
            e.preventDefault();
            addNewTodo();
          }}
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
          type='text'
        />
      </form>
      {error && (
        <div style={{ color: 'red', marginBottom: 30, fontSize: 12 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TodoForm;
