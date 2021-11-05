import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #e6e6e6;
    -webkit-font-smoothing: antialiased;
  }

  input, label, textarea, select, button, h1, h2, h3, h4, h5, h6 {
    font-family: 'Zilla Slab', serif;
  }

  input, p, label {
    font-size: 18px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
