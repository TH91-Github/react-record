import { colors } from "./Variable";

// 특정 요소 공통 style  
export const commonStyle = `
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
          background:${colors.text};
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
          background:${colors.text};
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
        background:#f5f6fa;
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

`