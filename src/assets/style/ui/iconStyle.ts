import { colors } from "../variables";

export const iconStyle = `
  .icon-close {
    overflow:hidden;
    display:inline-block;
    position:absolute;
    top:0px;
    right:0px;
    width:20px;
    height:20px;
    text-indent:-9999px;
    &::before, &::after {
      position:absolute;
      top: 50%;
      left:50%;
      width: 3px;
      height: 100%;
      border-radius: 3px;
      background: ${colors.black};
      transition: transform var(--transition);
      transform: translate(-50%, -50%) rotate(-45deg);
      content:"";
    }
    &::after{ 
      transform: translate(-50%, -50%) rotate(-135deg);
    }
    &:hover, &:focus {
      &::before{
        transform: translate(-50%, -50%) rotate(135deg);
      }
      &::after{
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
`;