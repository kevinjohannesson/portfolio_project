import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  children?: ReactNode;
}

export default function Container({children}: Props): ReactElement {
  return (
    <div/>
            // <CONTAINER>
            //   {children}
              
            // </CONTAINER>
  
  )
}

interface CONTAINER {
  isDraggingOver: boolean;
}
const CONTAINER = styled.div<CONTAINER>`
  width: 70%;
  border: 3px solid purple;

  /* height: 500px; */

  /* padding-top: 25%; */

  background-color: ${ props => props.isDraggingOver ? 'lightgreen' : 'white'};

  /* position: absolute; */

  display: flex;
  flex-direction: column;

  /* flex-grow: 1; */
  align-items: center;
  justify-content: center;
`
