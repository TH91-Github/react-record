import { createGlobalStyle } from 'styled-components';
import { media } from './Variable';

export const GlobalStyles = createGlobalStyle`
  img {
    vertical-align: top;
    width:100%;
    max-width:100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    appearance: none;
    border: none;
    background-color: transparent;
    font-size:inherit;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }
  svg {
    width:100%;
    height:100%;
  }
  .blind{
    position:absolute;
    top:-9999px;
    left:-9999px;
    font-size:1px;
    opacity:0;
  }
  .m-br{
    display:none;
  }
  ${media.mo}{
    .pc-br{
      display:none;
    }
    .m-br{
      display:block;
    }
  }
`;

