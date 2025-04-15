import { colors, textColor } from "../variables";

export const buttonStyle = `
.btn { 
  display:inline-block;
  position:relative;
  width:40px;
  height:40px;
  padding:5px 10px;
  border-radius:5px;
  border:1px solid ${colors.lineColor};
  background: #fff;
  transition: border-color var(--transition), background-color var(--transition), color var(--transition);
  & > span {
    text-shadow:0px 1px 1px rgba(0,0,0,0.2);
  }
  &:hover, &:focus {
    border-color:${colors.darkNavy};
    color:${colors.darkNavy};
  }
  &.ellipsis {
    width:100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  &.full {
    width:100%;
  }
  &-primary {
    border-color: ${colors.darkNavy};
    background:${colors.darkNavy};
    color:#fff;
    &:hover, &:focus {
      background:#fff;
    }
  }
  &-line{
    border-color: ${colors.darkNavy};
    color:${colors.darkNavy};
    &:hover, &:focus {
      background:${colors.darkNavy};
      color:#fff;
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