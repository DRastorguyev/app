import React, { useState } from 'react';
import { Button, Col, Row, Tooltip, Typography, Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { DeleteOutlined } from '@ant-design/icons';
import { List } from 'antd';

const RowBox = ({ todo, removeTodo, patchTodo }) => {
  const [showInput, setShowInput] = useState(false);

  const editTodo = (e) => {
    if (e.code !== 'Enter') return;
    patchTodo(todo.uuid, { name: e.target.value });
    setShowInput(false);
  };

  return (
    <List.Item>
      <Row
        justify='space-between'
        style={{ width: '100%', alignItems: 'center' }}
      >
        <Col style={{ cursor: 'pointer' }}>
          <Row
            onClick={(e) => {
              e.stopPropagation();
              setShowInput(true);
            }}
            align='middle'
          >
            <Checkbox
              checked={todo.done ? true : false}
              onClick={(e) => {
                e.stopPropagation();
                patchTodo(todo.uuid, { done: todo.done ? false : true });
              }}
              style={{ marginRight: 10 }}
            />
            <Typography>
              {showInput ? (
                <Input
                  size='small'
                  autoFocus
                  onBlur={() => setShowInput(false)}
                  onKeyDown={editTodo}
                  defaultValue={todo.name}
                />
              ) : (
                todo.name
              )}
            </Typography>
          </Row>
        </Col>
        <Col>
          {todo.createdAt.slice(11, 19)}
          <Tooltip placement='right' title='Удалить'>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                removeTodo(todo.uuid);
              }}
              style={{ marginLeft: 85 }}
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
