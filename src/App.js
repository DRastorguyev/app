import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import MyPagination from "./components/UI/pagination/MyPagination";
import MySort from "./components/UI/sort/MySort";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Подстричься под теннис",
      date: new Date().toLocaleDateString(),
      done: false,
    },
    {
      id: 2,
      title: "Купить мочалку",
      date: new Date().toLocaleDateString(),
      done: false,
    },
    {
      id: 3,
      title: "Сходить на курсы по английскому",
      date: new Date().toLocaleDateString(),
      done: false,
    },
  ]);

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

    // setTodos(todosState => {

    //   const newTodosState = [...todosState]
    //   const selectedToDo = newTodosState.find(todo => todo.id === id)
    //   selectedToDo.done = !selectedToDo.done
    //   return newTodosState

    // })
  };

  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          paddingTop: 35,
          marginBottom: 10,
          fontSize: 45,
          fontWeight: 300,
        }}
      >
        ToDo
      </h1>
      <hr />
      <TodoForm create={createTodo} />
      <MySort />
      {todos.length ? (
        <TodoList selectToDo={selectToDo} remove={removeTodo} todos={todos} />
      ) : (
        <h1 style={{ textAlign: "center", margin: 60 }}>Пусто :(</h1>
      )}
      <MyPagination />
      <hr style={{ marginTop: 20 }} />
    </div>
  );
}

export default App;
