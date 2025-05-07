import { bgColor, colors, media, textColor } from "./variables";

// 특정 요소 공통 style  
export const commonStyle = `
  h1, h2, h3, h4, h5, h6, .title {
    font-weight:700;
  }
  .tit {
    font-weight:600;
  }
  .title, .tit{
    color:${textColor.title};
  }
  .desc{
    color:${textColor.desc};
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
    animation: fadeUpAni .3s ease both;
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
  .fade-out{
    animation: fadeOutAni .3s ease both;
    @keyframes fadeOutAni {
      from {
        opacity:1;
        transform: translateY(0px);
      }
       to {
        opacity:0;
        transform: translateY(-10px);
      }
    }
  }
  .ellipsis {
    width:100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
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
