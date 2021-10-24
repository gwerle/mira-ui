import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
