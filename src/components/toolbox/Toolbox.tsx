import React, { ReactElement, useCallback } from 'react';
import { bgColor_1, bgColor_2 } from '../../styling/main';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTooltabCollapse, setWorkspace } from '../../redux/app/actions';
import { isTooltabCollapsed, getWorkspaces, getWorkspace } from '../../redux/app/selectors';
import { ICONS } from './Icons';

interface Props {
  empty?: any;
}

export default function Toolbox({empty}: Props): ReactElement {

  const dispatch = useDispatch();
  
  const tooltab_collapsed = useSelector(isTooltabCollapsed);

  const currentWorkspaceName = useSelector(getWorkspace);
  
  const workspaces = useSelector(getWorkspaces);

  const handleClick = useCallback( (workspaceName) => {
    if(tooltab_collapsed) dispatch(toggleTooltabCollapse());
    dispatch(setWorkspace(workspaceName))
  }, [tooltab_collapsed, dispatch]);

  return (
    <React.Fragment>
      {workspaces.map((workspace=>
        <BUTTON 
          key={workspace.name} 
          onClick={()=>handleClick(workspace.name)}
          active={currentWorkspaceName === workspace.name }
        >
          {ICONS[workspace.name]}
        </BUTTON>))
      }
    </React.Fragment>
  )
}

const BUTTON = styled.div<{active: boolean}>`
  width: 2rem;
  height: 2rem;
  background-color: ${props => props.active ? bgColor_1 : bgColor_2};
  border-radius: 0.3rem;

  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
