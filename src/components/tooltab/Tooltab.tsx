import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { getWorkspace } from '../../redux/app/selectors';
import PageTools from './pages/PageTools';
import ComponentTools from './pages/component_tools/ComponentTools';
import ProjectTools from './pages/ProjectTools';

interface Props {
  empty?: any;
}

export default function Tooltab({empty}: Props): ReactElement {
  const workspace = useSelector(getWorkspace);
  const toolset = (function(){
    switch(workspace){
      case 'project': {
        return <ProjectTools />
      }
      case 'pages': {
        return <PageTools />
      }
      case 'components': {
        return <ComponentTools />
      }
    }
  })()
  return toolset
}
