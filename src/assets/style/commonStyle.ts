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
.highlight{
  padding:2px 5px;
  border-radius:5px;
  background:${bgColor.sideWite};
  font-size:14px;
  color:${colors.mSlateBlue};
}
.blind{
  position:absolute;
  top:-9999px;
  left:-9999px;
  font-size:1px;
  opacity:0;
}
.m-br, m-only{
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
        top:9px;
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
}
.fade-down{
  animation: fadeDownAni .3s ease both;
}
@keyframes fadeInAni {
  from {  opacity:0; }
  to { opacity:1; }
}
@keyframes fadeOutAni {
  from { opacity:1; }
  to {  opacity:0; }
}
@keyframes fadeUpAni {
  from { opacity:0; transform: translateY(10px); }
  to { opacity:1; transform: translateY(0px); }
}
@keyframes fadeDownAni {
  from { opacity:1; transform: translateY(0); }
  to { opacity:0; transform: translateY(10px); }
}
@keyframes fadeUpCenterAni { // -50%, -50% 정렬 기준
  from { opacity:0; transform: translate(-50%, calc(-50% + 10px)); }
  to { opacity:1; transform: translate(-50%, -50%); }
}
@keyframes fadeDownCenterAni { // -50%, -50% 정렬 기준
  from { opacity:1; transform: translate(-50%, -50%); }
  to { opacity:0; transform: translate(-50%, calc(-50% + 10px)); }
}
${media.mo}{
  .pc-br, pc-only{
    display:none;
  }
  .m-br, m-only{
    display:block;
  }
  .name-tag {
    padding:3px 5px;
    font-size:11px;
    font-weight:300;
  }
}
`;
