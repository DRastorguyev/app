import React from 'react';
import { useEffect, useState } from 'react';
import TodoList from '../../TodoList';
import MySort from '../sort/MySort';
import TodoForm from '../../TodoForm';
import { Row, Col, Pagination, message } from 'antd';
import { $authHost } from '../../../http/index';

export default function Todos({isAuth}) {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    sortDirection: 'asc',
    filterType: 'all',
  });

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
  }, [filter, isAuth]);

  return (
    <div>
      <h1 className='title'></h1>
      <TodoForm createTodo={createTodo} />
      <Row>
        <Col xs={24} md={{ span: 24, offset: 0 }}>
          <MySort fetchTodos={fetchTodos} setFilter={setFilter} />
          <TodoList
            patchTodo={patchTodo}
            removeTodo={removeTodo}
            todos={todos.slice((page - 1) * 5, page * 5)}
          />
          <Pagination
            hideOnSinglePage={true}
            size='small'
            style={{ marginTop: 65 }}
            pageSize={5}
            current={page}
            onChange={(newPage) => setPage(newPage)}
            total={todos.length}
          />
        </Col>
      </Row>
    </div>
  );
}
