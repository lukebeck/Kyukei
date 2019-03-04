import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  bg: "#fff",
  fg: "rgb(10,10,10)",
  main: "LIGHTSTEELBLUE"
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    background: ${props => props.theme.main};
  }
  
  .incorrect {
    color: #eee;
    border-bottom: 3px solid #eee;
    pointer-events: none;
  };
  `;

const Theme = props => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {props.children}
    </Fragment>
  </ThemeProvider>
);

export default Theme;
