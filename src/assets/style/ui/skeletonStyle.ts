import { textColor } from "../variables";


export const skeletonStyle = `
.skeleton-item{
  overflow: hidden;
  position:relative;
  background:#ebebeb;
  pointer-events:none;
  user-select: none;
  color:${textColor.text};
  &::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 10%,rgba(255,255,255,0) 20%,rgba(255,255,255,0) 100%);
    animation: skeletonAni 1.5s infinite linear;
    content: '';
  }
}
@keyframes skeletonAni {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
`