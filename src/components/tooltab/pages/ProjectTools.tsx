import React, { ReactElement, useState } from 'react'
import { getPages, getProject, getCurrentPage } from '../../../redux/project/selectors';
import { useSelector } from 'react-redux';
// import Modal from '../../Modal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import Preview from '../../page_preview/Preview';
import exportProject from '../../export/exportProject';
import parser from '../../parser/Parser';


export default function ProjectTools(): ReactElement {
  const pages = useSelector(getPages);
  const project = useSelector(getProject);

  // const handleClick = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log('onClick')
  // }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const page = useSelector(getCurrentPage);
  
  const handleExport = () => {
    if(page) exportProject(page);
  }

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
      <button onClick={handleExport}>Export</button>
      <h3>Preview project</h3>
      <button onClick={handleShow}>Preview</button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Page preview:</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <Preview />
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleExport}>
            Export page
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
