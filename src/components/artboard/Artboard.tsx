import React, { ReactElement } from 'react'
import styled from 'styled-components';
import { bgColor_3 } from '../../styling/main';
import { useSelector } from 'react-redux';
import { getPages } from '../../redux/project/selectors';
import Page from './Page';

interface Props {
  niks?: boolean
}

export default function Artboard({niks}: Props): ReactElement {

  const pages = useSelector(getPages);

  return (
    <WRAPPER>
      <ARTBOARD>

        {pages.map((page, index) => 
          <Page key={index} page={page} />) 
        }
        {/* <BLOCK />
        <BLOCK />
        <BLOCK />
        <BLOCK />
        <BLOCK />
        <BLOCK />
        <BLOCK />
        <BLOCK /> */}
        

      </ARTBOARD>
    </WRAPPER>

  )
}

const WRAPPER = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar { display: none; }
`
const ARTBOARD = styled.div`
  min-height: 100%;
  min-width: 100%;

  padding: 3rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-size: 40px 40px;
  background-image: radial-gradient(circle, ${bgColor_3} 1px, rgba(0, 0, 0, 0) 1px);
`

// const BLOCK = styled.div`
//   width: 250px;
//   height: 250px;
//   border-radius: 25px;
  
//   background-color: white;
//   box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);
  
//   flex: 0 0 auto;

//   margin: 3rem;
// `
