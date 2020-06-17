import { ReactElement } from 'react'

interface Props {
  condition: boolean,
  wrapper: (node: JSX.Element ) => JSX.Element,
  children: JSX.Element
}

export default function ConditionalWrapper({condition, wrapper, children}: Props): ReactElement {
  return (
    condition ? wrapper(children) : children
  )
}