import { createGlobalStyle } from 'styled-components';
import { rootStyle } from './rootStyle';
import { commonStyle } from './commonStyle';
import { colors, media, textColor } from './variables';

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
  svg {
    width:100%;
    height:100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight:700;
  }
  .tit {
    font-weight:600;
  }
  .color{
    color:${colors.mSlateBlue};
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
  ${commonStyle}
  ${media.mo}{
    .pc-br{
      display:none;
    }
    .m-br{
      display:block;
    }
  }

  :root {
    ${rootStyle.transition}
  }
`;

