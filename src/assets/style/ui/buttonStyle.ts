import { colors, textColor } from "../variables";

export const buttonStyle = `
button {
  &[disabled]{ 
    cursor:default;
  }
}
.btn { 
  display:inline-block;
  position:relative;
  min-width:40px;
  min-height:40px;
  padding:5px 10px;
  border-radius:5px;
  border:1px solid ${colors.lineColor};
  background: #fff;
  transition: border-color var(--transition), background-color var(--transition), color var(--transition);
  & > span {
    text-shadow:0px 1px 1px rgba(0,0,0,0.2);
  }
  .icon { 
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width:25px;
    height:25px;
    & > svg{
      width:100%;
      height:100%;
    }
  }
  &:hover, &:focus {
    border-color:${colors.darkNavy};
    color:${colors.darkNavy};
  }
  &.full {
    width:100%;
  }
  &-primary {
    border-color: ${colors.darkNavy};
    background:${colors.darkNavy};
    color:#fff;
    .i-stroke {
      stroke: #fff;
    }
    .i-fill {
      fill: #fff;
    }
    &:hover, &:focus {
      background: #fff;
      .i-stroke {
        stroke:${colors.darkNavy};
      }
      .i-fill {
        fill: ${colors.darkNavy};
      }
    }
  }
  &-line{
    border-color: ${colors.darkNavy};
    color:${colors.darkNavy};
    .i-stroke {
      stroke: ${colors.darkNavy};
    }
    .i-fill {
      fill: ${colors.darkNavy};
    }
    &:hover, &:focus {
      background:${colors.darkNavy};
      color: #fff;
      .i-stroke {
        stroke: #fff;
      }
      .i-fill {
        fill: #fff;
      }
    }
  }
  &-gray {
    border-color: ${colors.gray};
    background:${colors.gray};
    color: #fff;
    &:hover, &:focus {
      border-color:${colors.gray};
      background: #fff;
      color: ${colors.gray};
    }
  }


  &[disabled], &.disabled {
    background:${colors.disabled};
    border-color:transparent; 
    cursor:default;
    color:${textColor.text};
    pointer-events:none;
    user-select: none;
  }
  &.skeleton-item {
    border-color:transparent;
    & > span {
      display:inline-block;
      position:relative;
      opacity:0.5;
    }
  }
}
`;