import { createGlobalStyle } from 'styled-components';
import { colors, media, rootStyle } from './Variable';

// const headerHeight = useRecoilValue(stateHeaderHeight);
export const GlobalStyles = createGlobalStyle`
  body {
    font-size:16px;
    font-weight:500;
    line-height:1.3;
    color:${colors.text};
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

