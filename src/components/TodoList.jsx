import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, remove, selectToDo}) => {

  return (
    <div>
      {todos.map((todo, index) => 
        <TodoItem selectToDo={selectToDo} remove={remove} number={index + 1} todo={todo} key={todo.id} />
      )}
    </div>
  );
};

export default TodoList;