import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const TodoInput = styled.input`
  border: none;
  padding: 10px;
  display: block;

  width: 100%;
  cursor: pointer;
`;

const Todo = styled.div`
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: baseline;
  margin: 1rem 0;
`;

const DeleteBtn = styled.button`
  background: white;
  border: none;
  height: 10px;
  width: 10px;
  padding: 5px;
  pointer: cursor;
`;

const TodoItem = () => {
  return <div>Hello</div>;
};

export default TodoItem;
