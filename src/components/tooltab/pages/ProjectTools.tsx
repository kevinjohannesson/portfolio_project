import React, { ReactElement } from 'react'
import { getPages, getProject } from '../../../redux/project/selectors';
import { useSelector } from 'react-redux';

interface Props {
  
}

export default function ProjectTools({}: Props): ReactElement {
  const pages = useSelector(getPages);
  const project = useSelector(getProject);
  return (
    <div>
     <h1>ProjectTools</h1>
      <h3>Project Settings</h3>
      title: {project.name} <br />
      total pages: {project.pages.length}
      <h3>All pages</h3>
      <ul>
        {pages.map(page=><li key={page.id}>{page.title}</li>)}
      </ul>
      <h3>Export project</h3>
      <button>Export</button>
    </div>
  )
}
