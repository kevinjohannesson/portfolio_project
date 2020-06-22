import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { getCurrentPage } from '../../redux/project/selectors';
import Container from 'react-bootstrap/Container';
import parser from '../parser/Parser';

export default function Preview(): ReactElement {
  const page = useSelector(getCurrentPage);
  const parsedData = page && parser(page);
  return (
    <Container>
      {
        parsedData ? <div dangerouslySetInnerHTML={{__html: parsedData}}/> : ''
      }
    </Container>
  )
}
