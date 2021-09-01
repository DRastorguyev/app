import React from "react";
import MyButton from "./UI/button/MyButton";

const TodoItem = (props) => {
  return (
    <div>
      <div
        onClick={() => props.selectToDo(props.todo.id)}
        className={props.todo.done ? ["todo", "todoDone"].join(" ") : "todo"}
      >
        <div className="todo__content">
          <div>
            {props.number}. {props.todo.title}
          </div>
        </div>
        <div className="todo__btns">
          {props.todo.date.substr(0, 10)}
          <MyButton
            style={{ marginLeft: 10 }}
            onClick={(e) => {
              e.stopPropagation();
              props.remove(props.todo);
            }}
          >
            <i className="far fa-trash-alt"></i>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
