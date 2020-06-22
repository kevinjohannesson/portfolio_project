import React, { ReactElement, useState } from 'react'
import { getPages, getProject } from '../../../redux/project/selectors';
import { useSelector } from 'react-redux';
// import Modal from '../../Modal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import Preview from '../../page_preview/Preview';


export default function ProjectTools(): ReactElement {
  const pages = useSelector(getPages);
  const project = useSelector(getProject);

  // const handleClick = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log('onClick')
  // }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <h3>Preview project</h3>
      <button onClick={handleShow}>Preview</button>
    
      {/* <Modal 
        show={show}
        close={handleClose}
      >
        hallo
        </Modal> */}


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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}
