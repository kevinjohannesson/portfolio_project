import React, { ReactElement, useCallback, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Component from './Component';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  empty?: any;
}

export default function ComponentTools({ empty}: Props): ReactElement {

  
  return (
    <COMPONENT_WRAPPER>
      <h1>Component Tools</h1>
      <Droppable
        droppableId={"TOOLTAB"}
      >
        { (provided) => (
          <COMPONENT_BOX 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Component />
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





