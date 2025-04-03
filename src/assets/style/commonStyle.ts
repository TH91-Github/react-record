import { bgColor, breakpoints, colors, textColor } from "./variables";

// 특정 요소 공통 style  
export const commonStyle = `
  .title, .tit{
    color:${textColor.title};
  }
  .desc{
    color:${textColor.desc};
  }
  .name-tag {
    display:inline-block;
    border-radius:5px;
    padding:4px 8px;
    background:${colors.mSlateBlue};
    font-size:12px;
    font-weight:400;
    color:#fff;
  }
  .bullet-lists {
    position: relative;
    & > li {
      position:relative;
      margin-top:8px;
      padding-left:12px;
      &:first-child{ 
        margin-top:0;
      }
      &.circle {
        &::before{
          position:absolute;
          top:6px;
          left:0;
          width:4px;
          height:4px;
          border-radius:50%;
          background:${textColor.text};
          content:'';
        }
      }
      &.bar {
        &::before{
          position:absolute;
          top:6px;
          left:0;
          width:4px;
          height:2px;
          background:${textColor.text};
          content:'';
        }
      }
    }
  }
  .code-lists{
    display:flex;
    gap:5px;
    flex-wrap:wrap;
    & > li {
      &:last-child {
        &::after{
          display:none;
        }
      }
      &::after{
        content:','
      }
      & > code{
        padding:2px 5px;
        border-radius:5px;
        background:${bgColor.sideWite};
        font-size:14px;
        color:${colors.mSlateBlue};
      } 
    }
  }
  .fade-up {
    animation: fadeUpAni .4s ease both;
    @keyframes fadeUpAni {
      from {
        opacity:0;
        transform: translateY(10px);
      }
       to {
        opacity:1;
        transform: translateY(0px);
      }
    }
  }
`;

// guide 공통 스타일
export const guideStyle = `
  .header-inner{
    overflow:hidden;
    max-width:${breakpoints.tab}px;
    margin:0 auto;
    padding:30px;
  }
  .content-wrap{
    overflow:hidden;
    max-width:${breakpoints.tab}px;
    margin:0 auto;
    padding:30px;
  }
`;