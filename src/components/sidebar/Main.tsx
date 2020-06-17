import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components';
import { bgColor_3, bgColor_1 } from '../../styling/main';
import { useSelector, useDispatch } from 'react-redux';
import { isCollapsed } from '../../redux/app/selectors';
import { toggleCollapse } from '../../redux/app/actions';
import Right from './Right';
import Left from './Left';

interface Props {
  right?: boolean;
  children?: JSX.Element;
}

export default function Main({right, children}: Props): ReactElement {
  
  const dispatch = useDispatch();

  const sidebar = right ? 'sidebar_right' : 'sidebar_left';
  const sidebarCollapsed = useSelector(isCollapsed(sidebar));

  const handleClick = useCallback( (event) => {
    dispatch(toggleCollapse(sidebar))
  }, [dispatch, sidebar]);

  return (
    <SIDEBAR collapsed={sidebarCollapsed} right={right}>
      <TOGGLE_SWITCH onClick={handleClick} right={right}/>
      {right ? <Right/> : <Left/>}
      {children}
    </SIDEBAR>
  )
}

const width = {unit: 'rem', amount: 0.5};
const height = {unit: 'rem', amount: 5};
const TOGGLE_SWITCH = styled.div<{right?: boolean}>`
  height: ${height.amount+height.unit};
  width: ${width.amount+width.unit};
  background-color: ${bgColor_1};

  border-radius: ${width.amount/2+width.unit};

  position: absolute;
  top: calc(50%-${height.amount+height.unit});
  ${props => props.right ? `left: ${width.amount/2+width.unit};` : `right: ${width.amount/2+width.unit};`}
  cursor: pointer;
`

const SIDEBAR = styled.div<{ collapsed: boolean, right?: boolean }>`
  height: 100%;
  width: ${props => props.collapsed ? '1rem' : '15rem'};

  overflow: hidden;
  
  ${props => props.right ? 'position: absolute; right: 0;' : 'position: relative;'}
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${bgColor_3};

  pointer-events: auto;
`
