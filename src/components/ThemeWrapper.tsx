import React, { ReactElement } from 'react'
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { isDarkMode } from "../redux/app/selectors";

interface Props {
  children: React.ReactChildren | React.ReactChild | React.ReactChild[]
}

export default function ThemeWrapper({children}: Props): ReactElement {
  const darkMode = useSelector(isDarkMode);
  return <ThemeProvider theme={{ theme: darkMode ? "dark" : "light" }}>{children}</ThemeProvider>;
}