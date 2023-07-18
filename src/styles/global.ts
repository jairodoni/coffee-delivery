import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  html {
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; //14px
  }
  @media (max-width: 450px) {
    font-size: 75%; //12px
  }
}

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
    padding: 1rem;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
