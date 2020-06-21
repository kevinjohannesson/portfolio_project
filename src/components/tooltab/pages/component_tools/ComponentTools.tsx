import React, { ReactElement, useCallback, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Component from './Component';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { changeNewComponentTag } from '../../../../redux/project/actions';

interface Props {
  empty?: any;
}

export default function ComponentTools({ empty}: Props): ReactElement {

  const dispatch = useDispatch();

  const [newComponent, set_newComponent] = useState(false);
  const [tag, set_tag] = useState('h1');
  const [value, set_value] = useState('');

  // const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   console.log(e.target.value)
  // }

  const handleClick = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('onClick')
    set_newComponent(true);
  }, []);

  const handleChange = useCallback( (event: ChangeEvent<HTMLSelectElement>) => {
    const tag = event.target.value;
    dispatch(changeNewComponentTag(tag));
  }, []);

  return (
    <COMPONENT_WRAPPER>
      <h1>Component Tools</h1>

      <button onClick={handleClick}>New component</button>
      <select onChange={handleChange}>
        <option value="h1">Heading</option>
        <option value="p">Paragraph</option>
        <option value="img">Image</option>
      </select>
      <input type="text" placeholder="type text or url here" onChange={e=>set_value(e.target.value)}/>

      <Droppable
        droppableId={"TOOLTAB"}
        isDropDisabled={true}
      >
        { (provided) => (
          <COMPONENT_BOX 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            { newComponent ? 
              <Component 
                tag={tag}
                value={value}
              />

              : null
            }
            {provided.placeholder}
          </COMPONENT_BOX>
        )}
      </Droppable>
    </COMPONENT_WRAPPER>
  )
}

const COMPONENT_WRAPPER = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid black;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const COMPONENT_BOX = styled.div`
  width: 100%;
  height: 100%;

  border: 3px solid green;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NEW_COMPONENT = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 20px;
  color: white;
`





