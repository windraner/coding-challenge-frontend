import { createGlobalStyle } from 'styled-components'

const Basic = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    outline: none;
  }
  html {
    font-size: 10px;
    background: #000;
  }
  @media screen and (max-width: 1680px) {
    html {
      font-size: 9px;
    }
  }
  @media screen and (max-width: 1440px) {
    html {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 1366px) {
    html {
      font-size: 7px;
    }
  }
  @media screen and (max-width: 1280px) {
    html {
      font-size: 6px;
    }
  }
  #root {
    display: flex;
    min-height: 100vh;
  }
  /* Line loader styles */
  #nprogress .bar {
    background: #2066d2 !important;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #29d, 0 0 5px #2066d2 !important;
  }
`

export default Basic
