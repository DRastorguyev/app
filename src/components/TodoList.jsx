import { List } from 'antd';
import React from 'react';
import RowBox from './Row';

const TodoList = ({ todos, removeTodo, selectToDo, setTodos }) => {
  return (
    <List
      size='large'
      dataSource={todos}
      renderItem={(todo) => (
        <RowBox
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          selectToDo={selectToDo}
          removeTodo={removeTodo}
        />
      )}
    />
  );
};

export default TodoList;
