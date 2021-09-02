import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, remove, selectToDo, setTodos}) => {

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <div>
      {todos.map((todo, index) => 
        <TodoItem setTodos={setTodos} selectToDo={selectToDo} remove={remove} number={index + 1} todo={todo} key={todo.id} />
      )}
    </div>
  );
};

export default TodoList;