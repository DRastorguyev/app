import { useEffect, useMemo, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MySort from './components/UI/sort/MySort';
import { Row, Col, Pagination } from 'antd';
import axios from 'axios';

// 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

function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({
    sortDirection: 'ASC',
    filterType: 'ALL',
  });

  const fetchTodos = async () => {
    const responce = await axios.get(
      'https://todo-api-learning.herokuapp.com/v1/tasks/1', {params: {filterBy: filter.filterType, order: filter.sortDirection}}
    );

    console.log(responce);

    setTodos(responce.data);
  };

  console.log(filter);

  const createTodo = async (todoName) => {
    const res = await axios.post(
      'https://todo-api-learning.herokuapp.com/v1/task/1',
      {
        name: todoName,
        done: false,
      }
    );

    fetchTodos();
  };

  const removeTodo = async (id) => {
    await axios.delete(
      `https://todo-api-learning.herokuapp.com/v1/task/1/${id}`
    );

    fetchTodos();
  };

  const patchTodo = async (id, editDate) => {
    await axios.patch(
      `https://todo-api-learning.herokuapp.com/v1/task/1/${id}`,
      editDate
    );

    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const [page, setPage] = useState(1);

  return (
    <div className='App'>
      <h1
        style={{
          textAlign: 'center',
          paddingTop: 5,
          marginBottom: 5,
          fontSize: 45,
          fontWeight: 100,
        }}
      >
        ToDo
      </h1>
      <TodoForm createTodo={createTodo} />
      <Row>
        <Col xs={24} md={{ span: 24, offset: 0 }}>
          <MySort
            fetchTodos={fetchTodos}
            setFilter={setFilter}
          />
          <TodoList
            patchTodo={patchTodo}
            removeTodo={removeTodo}
            todos={todos.slice((page - 1) * 5, page * 5)}
          />
          <Pagination
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
