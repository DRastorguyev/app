import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const TodoItem = ({setTodos, ...props}) => {

  const [showInput, setShowInput] = useState(false);

  const editTodo = e => {
    if(e.code !== 'Enter') return
    console.log(e.target.value)
    setTodos(todosState => {
      return todosState.map(todo => {
        if(todo.id === props.todo.id) return {...todo, title: e.target.value}
        return todo
      })
    })
    setShowInput(false)
  }

  return (
    <div>
      <div
        onClick={() => setShowInput(true)}
        className={props.todo.done ? ["todo", "todoDone"].join(" ") : "todo"}
      >
        <div
          className="todo__content"
        >
          
          <div>
            <MyButton
              style={{marginRight: 10}}
              onClick={ e => {
                e.stopPropagation();
                props.selectToDo(props.todo.id)
              }
                }>
              <i className="far fa-check-circle"></i>
            </MyButton>{" "}
            {showInput 
          ?  
            <MyInput
              style={{marginTop: 30}}
              autoFocus
              onBlur={() => setShowInput(false)}
              onKeyDown={editTodo}
              defaultValue={props.todo.title} />
          :
             `${props.number} | ${props.todo.title}` 
          }

          </div>
        </div>
        <div className="todo__btns">
          {props.todo.date.substr(0, 10)}
          <MyButton
            style={{ marginLeft: 25 }}
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
