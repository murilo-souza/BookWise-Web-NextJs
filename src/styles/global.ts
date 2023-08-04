import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  };

  body {
        background-color: ${(props) => props.theme.colors.gray800};
        color: ${(props) => props.theme.colors.gray200};
        -webkit-font-smoothing: antialiased;
    }


    body, input, textarea, button {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem
    }
`
