import React, { ReactElement, useCallback, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { updateNewComponent } from '../../../../redux/project/actions';

interface Props {
  tag: string;
  value: string;
}

export default function Component({tag, value}: Props): ReactElement {

  const dispatch = useDispatch();
  const handleMouseDown = useCallback( (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('onMouseDown')
    console.log(tag, value)
    dispatch(updateNewComponent(tag, value));
  }, [tag, value]);

  return (
    <Draggable draggableId={'NEW_COMPONENT'} index={0} >
       {
         (provided)=>(
          <ROW
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onMouseDown={handleMouseDown}
          >
            <TAG>
              {tag}
            </TAG>
            <VALUE>
              {value}
            </VALUE>

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

  /* height: 3rem; */

  background-color: white;
  color: black;


  align-self: stretch;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TAG = styled.div`
  border-right: 3px solid darkgray;
  background-color: lightgray;
  margin-right: 1rem;
`

const VALUE = styled.div`
  background-color: whitesmoke;
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