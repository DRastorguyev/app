import React from 'react';
import { useEffect, useState } from 'react';
import TodoList from '../../TodoList';
import MySort from '../sort/MySort';
import TodoForm from '../../TodoForm';
import { Col, message, List } from 'antd';
import { $authHost } from '../../../http/index';

export default function Todos({ isAuth }) {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    sortDirection: 'asc',
    filterType: 'all',
  });

  const visibleTodos = todos.slice((page - 1) * 5, page * 5);
  if (!visibleTodos.length)
    setPage((pageState) => (pageState === 1 ? pageState : pageState - 1));

  const fetchTodos = async () => {
    try {
      const params = { order: filter.sortDirection };

      if (filter.filterType === 'done' || filter.filterType === 'undone')
        params.filterBy = filter.filterType;

      const responce = await $authHost.get('/todos', {
        params,
      });
      setTodos(responce.data);
    } catch (error) {
      setTodos([]);
    }
  };

  const createTodo = async (todoName) => {
    try {
      await $authHost.post('/todo', {
        title: todoName,
        done: false,
      });
    } catch (error) {
      message.error('You need to sign in');
    }
    fetchTodos();
  };

  const removeTodo = async (id) => {
    await $authHost.delete(`/todo/${id}`);
    fetchTodos();
  };

  const patchTodo = async (id, editDate) => {
    await $authHost.patch(`/todos/${id}`, editDate);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
    if (page >= 2) setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, isAuth]);

  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <List
        pagination={{
          size: 'small',
          pageSize: 5,
          current: page,
          onChange: (newPage) => {
            setPage(newPage);
          },
          total: todos.length,
        }}
      >
        <Col xs={24} md={{ span: 24, offset: 0 }}>
          <MySort fetchTodos={fetchTodos} setFilter={setFilter} />
          <TodoList
            setPage={setPage}
            patchTodo={patchTodo}
            removeTodo={removeTodo}
            todos={visibleTodos}
          />
        </Col>
      </List>
    </div>
  );
}
