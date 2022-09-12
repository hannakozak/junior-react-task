import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  html {
    fontFamily: ${({ theme }) => theme.fontFamily.primary};
    font-size: 62.5%;
}
  body {
    line-height: 1.5;
    
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  input, button, textarea, select {
    font: inherit;
  }
  a {
    cursor: pointer;
    text-decoration: none;
}
`;
