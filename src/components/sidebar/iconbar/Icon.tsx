import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import { bgColor_1 } from '../../../styling/main';
import { useDispatch, useSelector } from 'react-redux';
import { isCollapsed } from '../../../redux/app/selectors';
import { toggleCollapse } from '../../../redux/app/actions';

interface Props {
  onClick: (t?: any) => void;
  icon?: JSX.Element;
}

export default function Icon({icon, onClick}: Props): ReactElement {

  const dispatch = useDispatch();
  const sidebar_left_collapsed = useSelector(isCollapsed('sidebar_left'));
  const handleClick = useCallback( (event) => {
    if(sidebar_left_collapsed) dispatch(toggleCollapse('sidebar_left'));

    onClick();
  }, [sidebar_left_collapsed, dispatch, onClick]);

  return (
    <ICON onClick={handleClick}>
      {icon}
    </ICON>
  )
}

const ICON = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${bgColor_1};
  border-radius: 0.3rem;

  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
