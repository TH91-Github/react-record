import { createGlobalStyle } from 'styled-components';
import { colors, media } from './Variable';

export const GlobalStyles = createGlobalStyle`
  body {
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
  .test-wrap{
    margin:50px auto;
    width:500px;
    height:500px;
    padding:30px;
    border:1px solid #dbdbdb; 
    input { 
      padding:6px 10px;
      border:1px solid #dbdbdb;
    }
    .btns{
      display:flex;
      gap:10px;
      margin-top:25px;
      & > button {
        padding:6px 10px;
        border-radius:5px;
        border:1px solid #dbdbdb;
      }
    }
    .input-item{
      position:relative;
      
    }
    .error{
      border:1px solid red;
      color:red; 
    }
    .error-txt{
      position:absolute;
      top:calc(100% + 5px);
      font-size:12px;
      color:red;
    }
  }
`;

