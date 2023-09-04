import styled from 'styled-components';
import CodeMirror from "@uiw/react-codemirror";
import { colors } from './Variable';

// Base Css
export const Blind = styled.span`
  position: absolute;
  top: -99999px;
  left: -9999px;
  opacity: 0;
  text-indent: -9999px;
`;

// Tag 
export const A = styled.a`
  display:inline-block;
  color: ${props => props.color || colors.black};
`;


// btnWrap
export const BtnWrap = styled.div`
  display: flex;
  margin: ${props => props.$margin || "0"};
  flex-direction: ${props => props.$flex || "row"};
  gap:${props => props.gap || "10px"};
`;


// ♣ BOX

// box line 
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

// Sns 
export const SnsList = styled.div`
  display:flex;
  margin: ${props => props.$margin || 0 };
  font-size:0;
  gap:${props => props.$gap || 0 };
`;


// Code 
export const CodeBox = styled(CodeMirror)`
  
`;
