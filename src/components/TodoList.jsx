import { List } from 'antd';
import React, { useState } from 'react';
import RowBox from './RowBox';

const TodoList = ({
  todos,
  setTodos,
  removeTodo,
  selectToDo,
  patchTodo,
  setPage,
}) => {
  
  if (!todos.length)
    setPage((pageState) => (pageState === 1 ? pageState : pageState - 1));

  const [currentTodo, setCurrentTodo] = useState({});

  const dragAndDrop = (todo) => ({
    dragOverHandler: (e) => {
      e.preventDefault();
      e.target.style.background = 'lightgrey';
    },

    dragLeaveHandler: (e) => {
      e.target.style.background = 'inherit';
    },

    dragStartHandler: (e) => {
      console.log(e);
      setCurrentTodo(todo);
    },

    dropHandler: (e) => {
      e.preventDefault();
      e.target.style.background = 'inherit';

      const selectedTodoId = currentTodo.id;
      const targetTodoId = todo.id;

      if (targetTodoId === selectedTodoId) return;
    },
  });

  return (
    <List
      style={{ marginTop: 35 }}
      size="large"
      dataSource={todos}
      renderItem={(todo) => (
        <RowBox
          dragAndDrop={dragAndDrop(todo)}
          setTodos={setTodos}
          key={todo.id}
          patchTodo={patchTodo}
          todos={todos}
          todo={todo}
          selectToDo={selectToDo}
          removeTodo={removeTodo}
        />
      )}
    />
  );
};

export default TodoList;
