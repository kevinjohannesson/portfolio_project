import React, { ReactElement } from 'react'
import styled from 'styled-components';
import { bgColor_1 } from '../../styling/main';
import { useSelector } from 'react-redux';
import { getPages } from '../../redux/project/selectors';
import Page from './Page';

interface Props {
  niks?: boolean
}

export default function Artboard({niks}: Props): ReactElement {

  const pages = useSelector(getPages);
  console.log(pages);

  return (
    <ARTBOARD>
      Artboard
      {pages.map((page, index) => 
        <Page key={index} page={page} />) 
      }
    </ARTBOARD>
  )
}

const ARTBOARD = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  position: fixed;

  top: 0;
  left: 0;

  overflow: scroll;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${bgColor_1};
`
