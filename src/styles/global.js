import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f0;
    -webkit-font-smoothing: antialiased;
  }

  input, label, textarea, select, button, h1, h2, h3, h4, h5, h6, span, p {
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
