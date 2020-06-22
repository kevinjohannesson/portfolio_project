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
  /* margin-bottom: 8px; */
  
  /* height: 3rem; */

  background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};


  align-self: stretch;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: orange;
//   border-radius: 4px;

//   margin-right: 8px;

// `

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
          // <Container
          //   {...provided.draggableProps}
          //   ref={provided.innerRef}
          //   isDragging={snapshot.isDragging}
          //   >
          //   <Handle 
          //     {...provided.dragHandleProps}
          //   />
          //   {props.row.tag}
          // </Container>
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
