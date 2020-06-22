import React, { ReactElement, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addPage } from '../../../redux/project/actions';

interface Props {
  empty?: any;
}

export default function PageTools({ empty}: Props): ReactElement {
  const dispatch = useDispatch();
  const handleClick = useCallback( (event) => {
    dispatch(addPage())
  }, [dispatch]);
  return (
    <div>
      <h1>PageTools</h1>
      <button onClick={handleClick}>add page BROKEN</button>
      
    </div>
  )
}
