import React, { ReactElement, useCallback, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  
}

export default function Component({}: Props): ReactElement {



  return (
    <Draggable draggableId={'NEW_COMPONENT'} index={4839} >
       {
         (provided)=>(
          <ROW
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            This is a new heading.
          </ROW>
         )
       }
    </Draggable>
  )
}

const ROW = styled.div`
  border: 3px solid lightgray;
  border-radius: 5px;
  padding: 8px;
  /* margin-bottom: 8px; */

  height: 3rem;

  background-color: white;
  color: black;


  align-self: stretch;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`



const COMPONENT = styled.div`
  width: 5rem;
  height: 5rem;
  /* border: 3px solid yellow; */

  border-radius: 1rem;

  background-color: #9C1AFF;

  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0.5rem;

  z-index: 1;
`