export interface Props {
  name: string,
  onClick?: () => void,
  strokeWidth?: number,
  strokeColor?: string,
  fillColor?: string,
  activeColor?: string,
  backgroundColor?: string,
  active?: boolean
}

export type Path = {
  [key:string]: string;
}