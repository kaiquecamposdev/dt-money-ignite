import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme['gray-800']};
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    line-height: 160%;
    
    box-sizing: border-box;

    font-weight: 400;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-100']};
  }
  *:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme['green-300']};
  }
  *::-webkit-scrollbar {
    height: 1rem;
    width: 1rem;
  }
  *::-webkit-scrollbar-track {
    border-radius: .5rem;
    background-color: ${(props) => props.theme['gray-700']};
  }

  *::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: ${(props) => props.theme['gray-300']};
  }
`
