import React from "react";
import { styled } from "styled-components";
import { colors } from "component/styled/common/Variable";

const PorgressWrap = styled.div`
  display:flex;
  margin: ${props => props.$margin || "0"};
  padding: ${props => props.$padding || "0"};
  align-items: center;
  gap:10px;
`;
const Porgress = styled.span`
  display:inline-block;
  overflow:hidden;
  position:relative;
  width:${props => props.$height || "100%"};
  height:${props => props.$height || "5px"};
  border-radius:5px;
  background: ${props => props.$bg || colors.lineColor};
  &::after {
    display:inline-block;
    position:absolute;
    top:0;
    left:0;
    width:${props => props.value+'%'};
    height:100%;
    background: ${colors.color1};
    animation: ${props => "gauge"+props.value} 1s both;
    content:"";
    @keyframes ${props => "gauge"+props.value} {
      0% {width:0;}
      100% {width: ${props => props.value+'%'};}
    }
  }
`;
const Label = styled.span`
  position:relative;
  z-index:2;
  font-size:14px;
  color:${colors.sTextColor};
  text-shadow: 0 1px 2px #000;
`;

function PorgressBar ({value, ...props}) {
  return (
    <PorgressWrap className="porgress">
      <Label>{value+ '%'}</Label>
      <Porgress value={value} {...props} />
    </PorgressWrap>
  )
}

export default PorgressBar;