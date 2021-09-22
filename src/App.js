import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Header from './components/UI/headerAuth/Header';
import TodoList from './components/TodoList';
import MySort from './components/UI/sort/MySort';
import { Row, Col, Pagination, message } from 'antd';
import ax from 'axios';
import { $authHost } from './http/index';

function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({
    sortDirection: 'asc',
    filterType: 'all',
  });

  const fetchTodos = async () => {
    const params = { order: filter.sortDirection };

    if (filter.filterType === 'done' || filter.filterType === 'undone')
      params.filterBy = filter.filterType;

    const responce = await $authHost.get('/todos', {
      params,
    });

    setTodos(responce.data);
  };

  const createTodo = async (todoName) => {
    try {
      await $authHost.post('/todo', {
        title: todoName,
        done: false,
      });
    } catch (error) {
      if (error.message === 'Request failed with status code 422') {
        message.error(
          'Validation error: Message must be at least 2 characters long name in body'
        );
      } else {
        message.error('Task with the same name exists');
      }
    }

    fetchTodos();
  };

  const removeTodo = async (id) => {
    await $authHost.delete(`/todo/${id}`);
    fetchTodos();
  };

  const patchTodo = async (id, editDate) => {
    console.log(editDate);
    await $authHost.patch(`/todos/${id}`, editDate);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const [page, setPage] = useState(1);

  return (
    <div className='App'>
      <Header />
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
