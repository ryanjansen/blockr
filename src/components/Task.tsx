import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

interface ContainerProps {
  readonly isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

const Task = (props: any) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
