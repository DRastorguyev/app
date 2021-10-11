import { List } from 'antd';
import React from 'react';
import RowBox from './RowBox';

const TodoList = ({ todos, removeTodo, selectToDo, patchTodo, setPage }) => {
  if (!todos.length)
    setPage((pageState) => (pageState === 1 ? pageState : pageState - 1));

  return (
    <List
      style={{ marginTop: 35 }}
      size='large'
      dataSource={todos}
      renderItem={(todo) => (
        <RowBox
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
