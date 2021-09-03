import { List } from 'antd';
import React from 'react';
import RowBox from './Row';

const TodoList = ({ todos, remove, selectToDo, setTodos }) => {
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
          removeTodo={remove}
        />
      )}
    />
  );
};

export default TodoList;
