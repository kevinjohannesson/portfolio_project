import React, { ReactElement, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addPage } from '../../../redux/project/actions';
import Page from '../../artboard/Page';


interface Props {
  empty?: any;
}

export default function Pages({empty}: Props): ReactElement {
  const dispatch = useDispatch();
  const handleClick = useCallback( (event) => {
    console.log('add a page');
    dispatch(addPage(Page))
  }, [dispatch]);
  return (
    <div>
      stuff for pages here...
      <button onClick={handleClick}>add page</button>
    </div>
  )
}
