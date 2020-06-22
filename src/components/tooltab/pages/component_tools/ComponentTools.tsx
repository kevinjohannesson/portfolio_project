import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import Component from './Component';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRow, setComponentCreation } from '../../../../redux/project/actions';
import { isCreatingNewComponent } from '../../../../redux/project/selectors';

export default function ComponentTools(): ReactElement {

  const dispatch = useDispatch();

  const isCreatingComponent = useSelector(isCreatingNewComponent);
  // console.log('isCreating', isCreatingComponent)

  const [tag, set_tag] = useState('h1');
  const initial_value = 'new component'
  const [value, set_value] = useState(initial_value);

  useEffect(() => {
    if(isCreatingComponent === 'finished'){
      set_value(initial_value);
      dispatch(setComponentCreation('idle'))
    }
  }, [dispatch, isCreatingComponent])
  // const 

  // const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   console.log(e.target.value)
  // }

  const handleClick = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(createNewRow());
  }, [dispatch]);

  // const handleChange = useCallback( (event: ChangeEvent<HTMLSelectElement>) => {
  //   const tag = event.target.value;
  //   dispatch(changeNewComponentTag(tag));
  // }, []);

  return (
    <COMPONENT_WRAPPER>
      <h1>Component Tools</h1>

      <button onClick={handleClick}>New component</button>
      <select onChange={e => set_tag(e.target.value)} defaultValue={tag}>
        <option value="h1">Heading</option>
        <option value="p">Paragraph</option>
        <option value="img">Image</option>
      </select>
      {/* <input type="text" placeholder="type text or url here" onChange={e => dispatch(changeNewComponentValue(e.target.value))}/> */}
      <input type="text" value={value} onChange={e => set_value(e.target.value)}/>

      <Droppable
        droppableId={"TOOLTAB"}
        isDropDisabled={true}
      >
        { (provided) => (
          <COMPONENT_BOX 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            { isCreatingComponent === 'in progress' ? 
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





