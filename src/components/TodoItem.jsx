import React from "react";
import MyButton from "./UI/button/MyButton";

const TodoItem = (props) => {
  return (
    <div>
      <div className="todo">
        <div className="todo__content">
          <strong>
            {props.number}. {props.todo.title}
          </strong>
        </div>
        <div className="todo__btns">
          <MyButton onClick={() => props.remove(props.todo)} >Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
