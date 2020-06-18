import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { getWorkspace } from '../../redux/app/selectors';
import PageTools from './pages/PageTools';
import ComponentTools from './pages/ComponentTools';

interface Props {
  empty?: any;
}

export default function Tooltab({empty}: Props): ReactElement {
  const workspace = useSelector(getWorkspace);
  const content = (function(){
    switch(workspace){
      case 'pages': {
        return <PageTools />
      }
      case 'components': {
        return <ComponentTools />
      }
    }
  })()
  return (
    <div>
      {content}
    </div>
  )
}
