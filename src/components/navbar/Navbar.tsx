import React, { ReactElement } from 'react'
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import MenuButton from './MenuButton';
import Titlebar from './Titlebar';

interface Props {
  niks?: boolean
}

export default function Navbar({niks}: Props): ReactElement {
  
  return (
    <NAVBAR>
      <MENU>
        <MenuButton />
      </MENU>
      <TITLEBAR>
        <Titlebar />
      </TITLEBAR>
      <QUICKBAR>
        <DarkModeToggle/>
      </QUICKBAR>
    </NAVBAR>
  )
}

const MENU = styled.div`
  width: 3rem;
  height: 100%;
  /* border: 2px solid lightblue; */
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const TITLEBAR = styled.div`
  height: 100%;
  width: 100%;
  /* border: 2px solid cadetblue; */
  
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const QUICKBAR = styled.div`
  width: 5rem;
  height: 100%;
  /* border: 2px solid coral; */
  
  padding: 0 1rem;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NAVBAR = styled.nav`
  height: 100%;
  width: 100%;

  /* border: 2px solid yellow; */

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`
