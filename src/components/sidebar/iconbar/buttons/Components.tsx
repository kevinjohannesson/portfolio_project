import React, { ReactElement, useCallback } from 'react';
import Icon from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import { setWorkspace } from '../../../../redux/app/actions';
import { useDispatch } from 'react-redux';

interface Props {
  empty?: any;
}

export default function Components({ empty}: Props): ReactElement {
  const dispatch = useDispatch();
  const handleClick = useCallback( (event) => {
    dispatch(setWorkspace('components'))
  }, [dispatch]);

  const icon = <FontAwesomeIcon icon={faShapes} />
  return (
    <Icon onClick={handleClick} icon={icon}/>
  )
}
