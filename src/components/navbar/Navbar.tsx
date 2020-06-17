import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components';
import { NAVBAR_HEIGHT } from '../../constants';
import Icon from '../ButtonIcon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { isDarkMode, getWorkspace } from '../../redux/app/selectors';
import { toggleDarkMode } from '../../redux/app/actions';
import { bgColor_3, bgColor_4 } from '../../styling/main';

interface Props {
  niks?: boolean
}

export default function Navbar({niks}: Props): ReactElement {
  
  const dispatch = useDispatch();

  const is_darkMode = useSelector(isDarkMode);
  const workspace = useSelector(getWorkspace);

  const handleMouseClick = useCallback( () => {
    console.log('onMouseClick')
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return (
    <NAVBAR>
      new_project / {workspace}
      <Icon name="sun" onClick={handleMouseClick} active={!is_darkMode} fillColor="green" activeColor={is_darkMode ? 'darkgray' : undefined} />
    </NAVBAR>
  )
}

const NAVBAR = styled.div`
  height: ${NAVBAR_HEIGHT.amount}${NAVBAR_HEIGHT.unit};
  width: 100vw;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${bgColor_3};
  
  border-bottom: 1px solid ${bgColor_4};
`
