import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';

const TodoForm = ({ get, create }) => {
  const [todo, setTodo] = useState({ title: '' });

  const addNewTodo = (e) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    if (todo.title.trim() === '') {
      setError('Форма пустая');
      setTimeout(() => setError(''), 3000);
    } else {
      create(newTodo);
      setTodo({ title: '' });
    }
  };

  const [error, setError] = useState('');

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
          onClick={get}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          value={todo.title}
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
