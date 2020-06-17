import React, { ReactElement, useCallback } from 'react';
import Icon from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setWorkspace } from '../../../../redux/app/actions';

interface Props {
  empty?: any;
}

export default function Pages({ empty}: Props): ReactElement {
  const dispatch = useDispatch();
  const handleClick = useCallback( (event) => {
    console.log('onClick')
    dispatch(setWorkspace('pages'))
  }, [dispatch]);

  const icon = <FontAwesomeIcon icon={faFile} />
  return (
    <Icon onClick={handleClick} icon={icon}/>
  )
}
