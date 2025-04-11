import { createGlobalStyle } from 'styled-components';
import { commonStyle } from './commonStyle';
import { rootStyle } from './rootStyle';
import { textColor } from './variables';
import { buttonStyle } from './ui/buttonStyle';
import { skeletonStyle } from './ui/skeletonStyle';

// const headerHeight = useRecoilValue(stateHeaderHeight);
export const GlobalStyles = createGlobalStyle`
  body {
    font-size:16px;
    font-weight:500;
    line-height:1.3;
    color:${textColor.text};
  }
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
  input:autofill,
  input:autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    border:1px solid #dbdbdb;
    transition: none;
  }
  svg {
    width:100%;
    height:100%;
  }
  ${commonStyle}
  ${buttonStyle}
  ${skeletonStyle}
  :root {
    ${rootStyle.transition}
  }
`;

