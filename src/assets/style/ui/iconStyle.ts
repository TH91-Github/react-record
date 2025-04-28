import { colors } from "../variables";


export const iconStyle = `
  .close-btn {
    overflow:hidden;
    display:inline-block;
    position:absolute;
    top:0px;
    right:0px;
    width:25px;
    height:25px;
    text-indent:-9999px;
    transition: transform var(--transition);
    &::before, &::after {
      position:absolute;
      top: 50%;
      left:50%;
      width: 3px;
      height: 100%;
      border-radius: 3px;
      background: ${colors.black};
      transform: translate(-50%, -50%) rotate(-45deg);
      content:"";
    }
    &::after{ 
      transform: translate(-50%, -50%) rotate(-135deg);
    }
    &:hover, &:focus {
      transform: rotate(180deg);
    }
  }
`;