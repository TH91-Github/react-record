import { colors } from "assets/style/variables";
import styled from "styled-components"
import { TitlePointPropsType } from "types/ui";

export const TitlePoint = ({
  titleTag = 'p',
  titleText,
  pointer,
  $display = 'inline-block',
  $fontSize,
  $activeColor
}:TitlePointPropsType) => {
  return(
    <StyleWrap 
      $display={$display}
      $fontSize={$fontSize || 18}
      className={`${titleTag === 'p' ? 'tit':'title'} ${pointer ? pointer : '' }`}
      $activeColor={$activeColor || colors.mSlateBlue}
      as={titleTag}
    >
      <span>{titleText}</span>
    </StyleWrap>
  )
}
interface StyleWrapPropsType {
  $display: string,
  $fontSize: number,
  $activeColor: string,
}
const StyleWrap = styled.div<StyleWrapPropsType>`
  display:${({$display}) => $display};
  font-size:${({$fontSize}) => $fontSize}px;
  & > span {
    font-size: inherit;
  }
  &.circle{
    position:relative;
    padding-left: ${({ $fontSize }) => $fontSize}px;
    &::before,
    &::after {
      position: absolute;
      top: ${({$fontSize}) => Math.floor($fontSize * 0.42 * 1.5)}px;
      width: ${({$fontSize}) => Math.floor($fontSize * 0.3)}px;
      height: ${({$fontSize}) => Math.floor($fontSize * 0.3)}px;
      left: ${({$fontSize}) => Math.floor($fontSize * 0.25)}px;
      border-radius: 50%;
      background: ${({$activeColor }) => $activeColor};
      content: '';
    }
    &::before {
      animation: titleCircleAni 1s ease infinite;
    }
    @keyframes titleCircleAni{ 
      0% {
        opacity:1;
        transform: scale(1);
      }
      100% {
        opacity:0;
        transform: scale(2.1);
      }
    }
  }
  &.underline{
    span{
      display:inline-block;
      position:relative;
      &::before{
        position:absolute;
        z-index:-1;
        bottom:3px;
        left:0;
        width:calc(100% + ${({$fontSize}) => $fontSize >= 20 ? 10 : 5}px);
        height:${({$fontSize}) => $fontSize >= 20 ? 5 : 3}px;
        border-radius:3px;
        background: ${({$activeColor }) => $activeColor};
        opacity:0.3;
        content:'';
      }
    }
  }
`;