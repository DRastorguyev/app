import { List } from 'antd';
import React from 'react';
import RowBox from './Row';

const TodoList = ({ todos, removeTodo, selectToDo }) => {
  return (
    <List
      size='large'
      dataSource={todos}
      renderItem={(todo) => (
        <RowBox
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
