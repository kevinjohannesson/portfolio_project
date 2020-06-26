import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
import { Row as I_Row } from '../../../redux/project/project.d';

interface I_ROW {
  isDragging?: boolean;
}

const ROW = styled.div<I_ROW>`
  border: 3px solid lightgray;
  border-radius: 5px;
  padding: 8px;

  /* flex-grow: 1; */
  flex: 0 0 auto;
  background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

interface Props {
  row: I_Row;
  index: number;
}

export default function Row({row, index}: Props) {
  return (
    <Draggable draggableId={row.id.toString()} index={index}>
      {
        (provided, snapshot)=>(
          <ROW
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <TAG>
              {row.tag}
            </TAG>
            {row.value}
          </ROW>
        )
      }
    </Draggable>
  )
}

const TAG = styled.div`
  background-color: lightgray;
  border-right: darkgray;
  margin-right: 1rem;
  padding: 0 0.5rem; 
`
