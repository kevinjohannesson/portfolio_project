import React from 'react'
// import WorkspaceName from '../../redux/app/app.d'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faShapes, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export const ICONS = {
  'project': <FontAwesomeIcon icon={faProjectDiagram} />,
  'pages': <FontAwesomeIcon icon={faFile} />,
  'components': <FontAwesomeIcon icon={faShapes} />
}