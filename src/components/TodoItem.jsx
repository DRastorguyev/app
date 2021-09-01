import React from "react";
import MyButton from "./UI/button/MyButton";

const TodoItem = (props) => {
  return (
    <div>
      <div
        
        className={props.todo.done ? ["todo", "todoDone"].join(" ") : "todo"}
      >
        <div className="todo__content">
          <div>
              <MyButton onClick={() => props.selectToDo(props.todo.id)}><i class="far fa-check-circle"></i></MyButton>  {props.number}. {props.todo.title}
          </div>
        </div>
        <div className="todo__btns">
          {props.todo.date.substr(0, 10)}
          <MyButton
            style={{marginLeft: 25}}
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
