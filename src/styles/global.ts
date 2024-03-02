import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 160%;
    box-sizing: border-box;

    font: 400 0.875rem 'Roboto';
    color: ${(props) => props.theme['gray-100']};
  }
  *:focus {
    outline: 0;
    box-shadow: 0 0 0 0.125rem ${(props) => props.theme['green-300']};
  }
  body {
    background: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${(props) => props.theme['gray-700']};
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme['gray-300']};
  }
`
