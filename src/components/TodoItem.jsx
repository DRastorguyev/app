import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoItem = ({ setTodos, ...props }) => {
  const [showInput, setShowInput] = useState(false);

  const editTodo = (e) => {
    if (e.code !== 'Enter') return;
    console.log(e);
    setTodos((todosState) => {
      return todosState.map((todo) => {
        if (todo.id === props.todo.id)
          return { ...todo, title: e.target.value };
        return todo;
      });
    });
    setShowInput(false);
  };

  return (
    <div>
      <div
        onClick={() => setShowInput(true)}
        className={props.todo.done ? ['todo', 'todoDone'].join(' ') : 'todo'}
      >
        <div>
          <div>
            <Checkbox
              style={{ marginRight: 10 }}
              onClick={(e) => {
                e.stopPropagation();
                props.selectToDo(props.todo.id);
              }}
            />
            {showInput ? (
              <MyInput
                style={{ marginTop: 30 }}
                autoFocus
                onBlur={() => setShowInput(false)}
                onKeyDown={editTodo}
                defaultValue={props.todo.title}
              />
            ) : (
              props.todo.title
            )}
          </div>
        </div>
        <div>
          {props.todo.date.substr(0, 10)}
          <DeleteOutlined
            className='deleteBtn:hover'
            style={{ marginLeft: 25, fontSize: '1.2em' }}
            onClick={(e) => {
              e.stopPropagation();
              props.remove(props.todo);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
