import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  children?: ReactNode;
}

export default function Container({children}: Props): ReactElement {
  return (
    <Droppable droppableId={"CONTAINER"}>
        {
          (provided, snapshot)=>(
            <CONTAINER
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {children}
              {provided.placeholder}
            </CONTAINER>
          )
        }
    </Droppable>
  )
}

interface CONTAINER {
  isDraggingOver: boolean;
}
const CONTAINER = styled.div<CONTAINER>`
  width: 70%;
  /* height: 100%; */
  align-self: stretch;
  border: 3px solid purple;

  background-color: ${ props => props.isDraggingOver ? 'lightgreen' : 'white'};

  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`
