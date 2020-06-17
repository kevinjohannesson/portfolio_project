import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { bgColor_2 } from '../../../styling/main';
import Components from './buttons/Components';
import Pages from './buttons/Pages';

interface Props {
  children?: JSX.Element;
}

export default function IconBar({children}: Props): ReactElement {
  return (
    <ICONBAR>
      <Pages />
      <Components />
    </ICONBAR>
  )
}

const ICONBAR = styled.div`
  height: 100%;
  width: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${bgColor_2};

  pointer-events: auto;
`
