import React, { ReactElement } from 'react'
import styled from 'styled-components';
import { bgColor_3 } from '../../styling/main';
import { useSelector } from 'react-redux';
import { getPages } from '../../redux/project/selectors';
// import Page from './Page';
import Page from './page_new/Page';

interface Props {
  niks?: boolean
}

export default function Artboard({niks}: Props): ReactElement {

  const pages = useSelector(getPages);

  return (
    <WRAPPER>
      <ARTBOARD>
        {pages.map((page, index) => 
          // <Page key={index} page={page} />) 
          <Page key={index} page={page}/>) 
        }
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

  background-size: 40px 40px;
  background-image: radial-gradient(circle, ${bgColor_3} 1px, rgba(0, 0, 0, 0) 1px);
  
  display: flex;
  align-items: center;
  justify-content: center;
`
