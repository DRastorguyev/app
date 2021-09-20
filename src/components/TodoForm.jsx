import { message } from 'antd';
import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';

const TodoForm = ({ createTodo }) => {
  const [todoName, setTodoName] = useState('');

  const addNewTodo = (e) => {
    if (todoName.trim() === '') {
      message.error('Form is empty')
    } else {
      createTodo(todoName);
      setTodoName('');
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
    </div>
  );
};

export default TodoForm;
