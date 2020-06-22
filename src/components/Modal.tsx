import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactElement | string
  show: boolean;
  close: ()=>void;
}

export default function Modal({show, close, children}: Props): ReactElement {
  console.log(show)
  return (
      show ? 
      <BACKGROUND 
        onClick={close}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <MODAL>
          {children}
        </MODAL>
     </BACKGROUND>
    : <></>
  
  )
}
const BACKGROUND = styled(motion.div)`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  
  opacity: 0;
  display: flex; /* Hidden by default */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MODAL = styled.div`
  background-color: #fefefe;
  /* margin: 50% auto; 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */

  color: black;

  height: 90vh;
  width: 90vw;
`