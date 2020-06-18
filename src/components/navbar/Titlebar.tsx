import React, { ReactElement } from 'react'
import { getProject, getCurrentPage, getCurrentComponent } from '../../redux/project/selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function Titlebar(): ReactElement {
  const project = useSelector(getProject);
  const page = useSelector(getCurrentPage);
  const component = useSelector(getCurrentComponent);
  return (
    <SLUG>
      {`${project.name} > ${page && page.title} ${component ? (component.title ? component.title : 'untitled component') : ''}`}
    </SLUG>
  )
}

const SLUG = styled.span`
`
