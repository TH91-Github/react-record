import styled, {css, keyframes} from 'styled-components';
import { breakpoints, colors, media} from './Variable';

// css
export const notice = css`
  display:inline-block;
  position:relative;
  padding-left:1em;
  &::before {
    position:absolute;
    top:0;
    left:0;
    content:'※';
  }
`;
// animation
export const animation =(aniName, t,ttf,d,fm) => css`
  animation: ${aniName} ${t ? t : '1'}s ${ttf ? ttf :'ease'} ${d ? d : 0}s ${fm ? fm : 'both'};
`;

// keyframes
export const fadeIn = (xy, num) => keyframes`
  0%{
    transform: ${
      xy === '-x'
      ? `translateX(${num ? num*-1 : -50}px)`
      : xy === 'x'
      ? `translateX(${num ? num : 50}px)`
      : xy === '-y'
      ? `translateY(${num ? num*-1 : -50}px)`
      : `translateY(${num ? num : 50}px)`
    };
    opacity:0;
  }
  100%{
    transform: translate(0,0);
    opacity:1;
  }
`;

// keyframes
export const TitMark = (lar) => keyframes`
  0%{
    transform: translateX(${(75*lar)}%);
    opacity:1;
  }
  50%{
    transform: translateX(${(25*lar)}%);
    opacity:.8;
  }
  100%{
    transform: translateX(${(75*lar)}%);
    opacity:1;
  }
`;

export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
  cursor:pointer;
`;

export const BtnArticle = styled.div`
  display:flex;
  justify-content : ${props => props.$justifyConent || 'flex-start'};
  ${props => props.gap && `gap: ${props.$gap}`};
  margin-top:${props => props.$marginTop || 30 }px;
  ${media.mo}{
    margin-top:${props => props.$marginTop || 20 }px;
  }
`;  

export const InnerStyle = styled.div`
  width:100%;
  max-width:${breakpoints.pc}px;
  margin:0 auto;
  padding:0 30px;
  ${media.mo} {
    padding: 0 20px;
  }
`;

// 좌우로 5px 움직임
export const MotionLR = styled.span`
  display:inline-block;
  animation: LeftRightInfinite 1.5s linear infinite;
  @keyframes LeftRightInfinite {
    from, to { transform:translateX(0) }
    50% {  transform:translateX(5px)}
  }
`;

// ♣ ICON
export const Icon = styled.i`
  display:inline-block;
  position:relative;
  width: ${props => props.width || "20px"};
  height: ${props => props.width || "20px"};
  border-radius: ${props => props.$borderRadius || 0};
  ${props => props.$bg 
    && 
    `
      background: ${props.$bg};
      border:1px solid ${props.$bg};
    `
  };
`;
// 타이틀 TitleBox > Title 같이 사용.
export const TitleBox = styled.div`
  text-align: ${props => props.$align || 'center'};
  ${props => 
    `
    ${props.$align === "left" && `
      .tit {
        &::before, &::after{
          left:10px;
        }
      }
    `}
    ${props.$align === "right" && `
      .tit {
        &::before, &::after{
          left:auto;
          right:10px;
        }
      }
    `}
  `}
  
`;
export const Title = styled.h2`
  position:relative;
  padding-top:12px;
  font-size:${props => props.$fontSize || 24}px;
  font-weight:500;
  & > strong { 
    font-weight:800;
  }
  &::before, &::after {
    position:absolute;
    top:0;
    left:50%;
    width:12px;
    height:12px;
    border-radius:50%;
    background:${colors.bgGreen};
    animation: ${TitMark(-1)} 4s linear infinite;
    content:"";
  }
  &::after{
    background:${colors.yellow};
    animation: ${TitMark(1)} 4s linear infinite;
  }
  & + p, & + .txt {
    margin-top:8px;
  }
  ${media.mo}{
    font-size:${props => props.$fontSize || 18}px;
  }
`;

export const SubTxt = styled.p`
  font-size:${props => props.$fontSize || 16}px;
  color:${colors.subTextColor};
  line-height:1.5;
  ${media.mo}{
    font-size:${props => props.$fontSize || 14}px;
  }
`;
