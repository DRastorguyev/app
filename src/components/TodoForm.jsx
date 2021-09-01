import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";

const TodoForm = ({ create }) => {
  const [todo, setTodo] = useState({ title: "" });

  const addNewTodo = (e) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    todo.title === "" ? alert("Пусто") : create(newTodo);
    setTodo({ title: "" });
  };

  return (
    <div>
      <form
        style={{
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <MyInput
          onKeyDown={(e) => {
            if (e.code !== "Enter") return;
            e.preventDefault();
            addNewTodo();
          }}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          value={todo.title}
          type="text"
        />
      </form>
    </div>
  );
};

export default TodoForm;
