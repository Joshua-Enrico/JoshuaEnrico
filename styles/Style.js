
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
  }
  html {
          scroll-behavior: smooth;
  }
  body,
  button,
  textarea,
  input{
        font-family: ${props => props.theme.bodyFont};
        font-size: ${props => props.theme.normalFont};
  }

  body {
        background-color: ${props => props.theme.bodyColor};
        color : ${props => props.theme.textColor};
        margin:    0 auto;
        max-width: 998px;
        align-self: center;
  }
  h1,h2,h3 {
      color: ${props => props.theme.titleColor};
  }
  ul {
      list-style: none;
  }
  a{
      text-decoration: none;
  }
  button {
      cursor: pointer;
      border: none;
      outline: none;
  }
  img {
      max-width: 100%;
      height: auto;
  }
`




export { GlobalStyle };