import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  background: "#363537",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",

  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding:0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
