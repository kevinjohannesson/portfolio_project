import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  empty?: any;
}

export default function ComponentTools({ empty}: Props): ReactElement {
  const handleMouseMove = useCallback( (event) => {
    console.log('onMouseMove')


    // console.log(document.elementsFromPoint(event.clientX, event.clientY))
    const elements = document.elementsFromPoint(event.clientX, event.clientY)
    if(elements[1].nodeName==="LI"){
      
      (elements[0] as HTMLElement).style.display = 'none'
      
      console.log('hallo')}


    
  }, []);
  return (
    <COMPONENT_WRAPPER>
      <h1>Component Tools</h1>
      <COMPONENT_BOX>
        <COMPONENT 
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0}}
          dragElastic={1}
          dragMomentum={false}
          
          // onMouseMoveCapture={handleMouseMove}
          onMouseUpCapture={handleMouseMove}
        >
          Heading
        </COMPONENT>
        <COMPONENT drag>Image</COMPONENT>
        <COMPONENT drag>Text</COMPONENT>
      </COMPONENT_BOX>
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

const COMPONENT = styled(motion.div)`
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
