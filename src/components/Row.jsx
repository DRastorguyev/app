import React, { useState } from 'react';
import { Button, Col, Row, Tooltip, Typography } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import MyInput from './UI/input/MyInput';
import { List } from 'antd';

const RowBox = ({  todo, setTodos, selectToDo, removeTodo }) => {

  const [showInput, setShowInput] = useState(false);

  const editTodo = (e) => {
    if (e.code !== 'Enter') return;
    console.log(e);
    setTodos((todosState) => {
      return todosState.map((todoItem) => {
        if (todoItem.id === todo.id)
          return { ...todo, title: e.target.value };
        return todoItem;
      });
    });
    setShowInput(false);
  };	

  return (
    <List.Item>
      <Row justify='space-between' style={{ width: '100%' }}>
        <Col style={{ cursor: 'pointer' }}>
          <Row
            onClick={(e) => {
              e.stopPropagation();
              setShowInput(true);
            }}
            align='middle'
          >
            <Checkbox
              onClick={(e) => {
                e.stopPropagation();
                selectToDo(todo.id);
              }}
              style={{ marginRight: 10 }}
              icon={<CheckCircleOutlined />}
            />
            <Typography>
              {showInput ? (
                <MyInput
                  style={{ marginTop: 30 }}
                  autoFocus
                  onBlur={() => setShowInput(false)}
                  onKeyDown={editTodo}
                  defaultValue={todo.title}
                />
              ) : (
                todo.title
              )}
            </Typography>
          </Row>
        </Col>
        <Col>
          {/* {todo.data.slice(0, 10)} */}
          <Tooltip placement='right' title='Удалить'>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                removeTodo(todo);
              }}
              style={{ marginLeft: 10 }}
              shape='circle'
              size='small'
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </Col>
      </Row>
    </List.Item>
  );
};

export default RowBox;
