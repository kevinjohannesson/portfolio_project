import React, { ReactElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isDarkMode } from '../../redux/app/selectors';
import { toggleDarkMode } from '../../redux/app/actions';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
 empty?: any; 
}

export default function DarkModeToggle({empty}: Props): ReactElement {

  const dispatch = useDispatch();

  const darkMode = useSelector(isDarkMode);
  
  const handleToggleDarkMode = useCallback( () => {
    console.log('onMouseClick')
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return (
    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} onClick={handleToggleDarkMode}/>
  )
}
