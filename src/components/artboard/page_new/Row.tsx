import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Row as RowInterface } from '../../../redux/project/project.d';

interface Props {
  children: ReactElement;
  row: RowInterface;
  index: number;
}

export default function Row({children, row, index}: Props): ReactElement {
  
  return (
    <Draggable draggableId={row.id.toString()} index={index}>
      {(provided, snapshot) => (
        <ROW
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          inPortal={snapshot.isDragging}
        >
          {children}
        </ROW>
      )}
    </Draggable>
  )
}


const ROW = styled.div<{inPortal: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid darkgray;
  border-radius: 0.5rem;

  margin: 0.2rem 0;
  padding: 0.5rem;

  background-color: white;
`