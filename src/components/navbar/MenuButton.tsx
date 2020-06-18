import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {
  empty?: any;
}

export default function MenuButton({empty}: Props): ReactElement {

  return (
    <FontAwesomeIcon icon={faBars} />
  )
}
