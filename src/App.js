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

  const sortedAndFiltredArr = useMemo(() => {
    let filtredArr = [];

    switch (filter.filterType) {
      case 'DONE':
        filtredArr = todos.filter((todo) => todo.done);
        break;
      case 'UNDONE':
        filtredArr = todos.filter((todo) => !todo.done);
        break;
      default:
        filtredArr = todos;
        break;
    }

    return filtredArr.sort((a, b) => {
      if (filter.sortDirection === 'ASC')
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [todos, filter]);

  const fetchTodos = async () => {
    const responce = await axios.get(
      'https://todo-api-learning.herokuapp.com/v1/tasks/1'
    );
    setTodos(responce.data);
  };

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
  }, []);

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
          <MySort setFilter={setFilter} />
          <TodoList
            patchTodo={patchTodo}
            todos={todos}
            removeTodo={removeTodo}
            todos={sortedAndFiltredArr.slice((page - 1) * 5, page * 5)}
          />
          <Pagination
            pageSize={5}
            current={page}
            onChange={(newPage) => setPage(newPage)}
            total={sortedAndFiltredArr.length}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
