import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Подстричься под теннис" },
    { id: 2, title: "Купить мочалку" },
    { id: 3, title: "Сходить на курсы по английскому" },
  ]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  // Получаем post из дочернего элемента
  const removeTodo = (todo) => {
    setTodos(todos.filter(t =>  t.id !== todo.id))
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", paddingTop: 100, marginBottom: 50 }}>ToDo</h1>
      <TodoForm create={createTodo} />
      {todos.length
      ? 
      <TodoList remove={removeTodo} todos={todos} />
      :
      <h1 style={{textAlign: 'center', marginTop: 100 }} >Пусто :(</h1>
      }
    </div>
  );
}

export default App;
