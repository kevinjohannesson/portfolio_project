import React, { ReactElement } from 'react'
import Components from './content/Components'
import Pages from './content/Pages'
import { useSelector } from 'react-redux';
import { getWorkspace } from '../../redux/app/selectors';

interface Props {
  niks?: any;
}

export default function Left({niks}: Props): ReactElement {
  const workspace = useSelector(getWorkspace);
  const content = (function(){
    switch(workspace){
      case 'pages': {
        return <Pages />
      }
      case 'components': {
        return <Components />
      }
    }
  })()
  return (
    <div>
      {content}
    </div>
  )
}
