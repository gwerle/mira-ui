import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Light.ttf");
    font-style: medium;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
  font-family: "Raleway";
  src: url("/fonts/Raleway-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-Medium.ttf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Raleway, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
