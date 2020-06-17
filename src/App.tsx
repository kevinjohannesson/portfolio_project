import React from 'react';
import './App.css';
import IconBar from './components/sidebar/iconbar/IconBar';
import {default as SIDEBAR_L} from './components/sidebar/Main';
import {default as SIDEBAR_R} from './components/sidebar/Main';
import Navbar from './components/navbar/Navbar';
import Artboard from './components/artboard/Artboard';
import ThemeWrapper from './components/ThemeWrapper';
import styled from 'styled-components';
import { textColor } from './styling/main';

function App() {
  return (
    <ThemeWrapper>
      <APP>
        <Artboard />
        <Navbar />
        <CONTAINER>
          <IconBar />
          <SIDEBAR_L />
          <SIDEBAR_R right />
        </CONTAINER>
      </APP>
    </ThemeWrapper>
  );
}

export default App;

const APP = styled.div`
  color: ${textColor};

  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CONTAINER = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  align-self: flex-start;
  
  position: relative;

  pointer-events: none;
`