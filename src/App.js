import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import MySort from './components/UI/sort/MySort';
import { Row, Col, Pagination, message } from 'antd';
import axios from 'axios';

// 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

function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({
    sortDirection: 'asc',
    filterType: 'all',
  });

  // const deleteTodo = (id) => {
  //   setTodos(todoState => {
  //     return [...todoState].filter(todo => todo.id === id)
  //   })
  //   console.log(id);
  // }

  const fetchTodos = async () => {
    const params = { order: filter.sortDirection };

    if (filter.filterType === 'done' || filter.filterType === 'undone')
      params.filterBy = filter.filterType;
    const responce = await axios.get(
      'https://todo-api-learning.herokuapp.com/v1/tasks/1',
      { params }
    );
    setTodos(responce.data);
  };

  const createTodo = async (todoName) => {
    try {
      await axios.post('https://todo-api-learning.herokuapp.com/v1/task/1', {
        name: todoName,
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
          <MySort fetchTodos={fetchTodos} setFilter={setFilter} />
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
