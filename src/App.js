import { useMemo, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import MyPagination from "./components/UI/pagination/MyPagination";
import MySort from "./components/UI/sort/MySort";
import { Typography, Row, Col, Divider, } from "antd";
import Item from "antd/lib/list/Item";

// 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

function App() {
  const { Title } = Typography;

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Подстричься под теннис",
      date: "2021-10-01T12:26:21.139Z",
      done: false,
    },
    {
      id: 2,
      title: "Купить мочалку",
      date: "2021-07-01T12:26:21.139Z",
      done: false,
    },
    {
      id: 3,
      title: "Сходить на курсы по английскому",
      date: "2021-09-01T12:26:21.139Z",
      done: false,
    },
  ]);

  const [filter, setFilter] = useState({
    sortDirection: "ASC",
    filterType: "ALL",
  });

  const sortedAndFiltredArr = useMemo(() => {
    let filtredArr = [];

    switch (filter.filterType) {
      case "DONE":
        filtredArr = todos.filter((todo) => todo.done);
        break;
      case "UNDONE":
        filtredArr = todos.filter((todo) => !todo.done);
        break;
      default:
        filtredArr = todos;
        break;
    }

    return filtredArr.sort((a, b) => {
      if (filter.sortDirection === "ASC")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [todos, filter]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Получаем post из дочернего элемента
  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const selectToDo = (id) => {
    const newTodosState = [...todos];
    const selectedToDo = newTodosState.find((todo) => todo.id === id);
    selectedToDo.done = !selectedToDo.done;

    setTodos(newTodosState);
  };

  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Divider
        orientation="left"
        level={1}
        style={{
        textAlign: "center",
        paddingTop: 10,
        marginBottom: 10,
        fontSize: 45,
        fontWeight: 100,
      }}
      >
        ToDo
      </Divider>
      <TodoForm create={createTodo} />
      <Row>
        <Col xs={24} md={{span: 24, offset: 0}}>
        
          <MySort setFilter={setFilter} />
          {todos.length ? (
            <TodoList
              setTodos={setTodos}
              selectToDo={selectToDo}
              remove={removeTodo}
              todos={sortedAndFiltredArr.slice((page - 1) * 5, page * 5)}
            />
          ) : (
            <h1 style={{ textAlign: "center", margin: 60 }}>Пусто :(</h1>
          )}
          <MyPagination
            setPage={setPage}
            page={page}
            lastPage={Math.ceil(sortedAndFiltredArr.length / 5)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
