import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
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
    dispatch(updateNewComponent(tag, value));
  }, [dispatch, tag, value]);

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

  background-color: white;
  color: black;

  height: 10rem;


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