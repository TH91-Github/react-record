import styled, {css} from 'styled-components';
import CodeMirror from "@uiw/react-codemirror";
import { sizes, colors, font} from './Variable';

// common 
const MarginPadding = css`
  margin:${props => props.$margin || "0"};
  padding:${props => props.$padding || "0"};
`
// ♣ Base Css
export const Blind = styled.span`
  position: absolute;
  top: -99999px;
  left: -9999px;
  opacity: 0;
  text-indent: -9999px;
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

// ♣ Tag 
export const A = styled.a`
  display:inline-block;
  color: ${props => props.color || colors.black};
`;

// ♣ btnWrap
export const BtnWrap = styled.div`
  display: flex;
  ${MarginPadding}
  flex-direction: ${props => props.$flex || "row"};
  gap:${props => props.gap || "10px"};
`;

// ♣ BOX

// inner
export const BoxInner = styled.div`
  position:relative;
  width:100%;
  ${props => !props.full && `max-width: ${props.maxWidth || sizes.table+'px'}`};
  margin: 0 auto;
  padding:${props => props.$padding || "0"};
`;

// line 
export const BoxLine = styled.div`
  margin:${props => props.$margin || "10px 0 0 0"};
  padding:${props => props.$padding || "10px 0 0 0"};
  padding:10px;
  ${props => !(props.$top || props.$right || props.$bottom || props.$left) && `border:1px solid ${colors.lineColor};`}
  ${props => props.$top && `border-top:1px solid ${colors.lineColor};` }
  ${props => props.$right && `border-right:1px solid ${colors.lineColor};` }
  ${props => props.$bottom && `border-bottom:1px solid ${colors.lineColor};` }
  ${props => props.$left && `border-left:1px solid ${colors.lineColor};` }
`;

// ♣ Sns 
export const SnsList = styled.div`
  display:flex;
  justify-content: ${props => props.$align || "flex-start"};
  ${MarginPadding}
  font-size:0;
  gap:${props => props.$gap || 0 };
`;

export const TextP = styled.p`
  ${MarginPadding}
  font-size: ${props => props.fontSize || font.size};
  text-align: ${props => props.align || "left"};
  & + p { 
    margin-top: 10px;
  }
`;

// ♣ Code 
export const CodeBox = styled(CodeMirror)`
  
`;
