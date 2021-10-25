import React, { useState } from 'react';
import { Button, Col, Row, Tooltip, Typography, Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { DeleteOutlined } from '@ant-design/icons';
import { List } from 'antd';

const RowBox = ({ todo, removeTodo, patchTodo, dragAndDrop }) => {
  const [showInput, setShowInput] = useState(false);
  const [clicked, setClicked] = useState(true);

  const editTodo = (e) => {
    if (e.code !== 'Enter') return;
    patchTodo(todo.id, { title: e.target.value });
    setShowInput(false);
  };

  return (
    <List.Item style={{ borderBottom: '1px solid #f0f0f042' }}>
      <Row
        draggable
        onDragOver={dragAndDrop.dragOverHandler}
        onDragLeave={dragAndDrop.dragLeaveHandler}
        onDragStart={dragAndDrop.dragStartHandler}
        onDrop={dragAndDrop.dropHandler}
        justify="space-between"
        style={{
          width: '100%',
          alignItems: 'center',
          color: '#fff',
          cursor: 'grab',
        }}
      >
        <Col style={{ cursor: 'pointer' }}>
          <Row
            onClick={(e) => {
              e.stopPropagation();
              setShowInput(true);
            }}
            align="middle"
          >
            <Checkbox
              checked={todo.done ? true : false}
              onClick={(e) => {
                e.stopPropagation();
                patchTodo(todo.id, { done: todo.done ? false : true });
              }}
              style={{ marginRight: 10 }}
            />
            <Typography style={{ color: '#fff', fontSize: 15 }}>
              {showInput ? (
                <Input
                  style={{ width: '50vh' }}
                  size="small"
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
          {todo.createdAt.slice(11, 19)}
          <Tooltip placement="right" title="Delete">
            <Button
              disabled={!clicked}
              onClick={(e) => {
                e.stopPropagation();
                setClicked(false);
                removeTodo(todo.id);
              }}
              style={{ marginLeft: 65, marginRight: 18 }}
              shape="circle"
              size="small"
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </Col>
      </Row>
    </List.Item>
  );
};

export default RowBox;
