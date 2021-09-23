import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Header from './components/UI/headerAuth/Header';
import TodoList from './components/TodoList';
import MySort from './components/UI/sort/MySort';
import { Row, Col, Pagination, message } from 'antd';
import { $authHost } from './http/index';

function App() {
  const [todos, setTodos] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
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

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('token'));
  }, []);

  return (
    <div className='App'>
      <Header setIsAuth={setIsAuth} isAuth={isAuth} />
      <h1 className='title'>ToDo</h1>
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

export default App;
