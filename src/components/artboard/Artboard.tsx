import React, { ReactElement, Fragment } from 'react'
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
      {pages.map((page, index) => {

        return (
          <Fragment>

        <Page key={index} page={page} />
        <Page key={index} page={page} />
        <Page key={index} page={page} />
        <Page key={index} page={page} />
        <Page key={index} page={page} />
        <Page key={index} page={page} />
          </Fragment>
          )  
      })
      }
    </ARTBOARD>
  )
}

const ARTBOARD = styled.div`
  min-height: 100vh;


  position: fixed;


  overflow: scroll;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  flex-wrap: nowrap;

  background-color: ${bgColor_1};
`
