import React from "react";
import { styled } from "styled-components";
import { colors } from "component/styled/common/Variable";

// scroll - 해당 영역에 왔을 때 on active 클래스 또는 value에 값 넣기 : 고민 중
const PorgressWrap = styled.div`
  display:flex;
  ${props => `
    ${props.$marginTop && `margin-top:${props.$marginTop}`};
  `}
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
    background: ${colors.green};
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
  text-shadow: 0 1px 1px rgba(0,0,0,.7);
`;

function PorgressBar ({value, ...props}) {
  return (
    <PorgressWrap className="porgress" {...props}>
      <Label>{value+ '%'}</Label>
      <Porgress value={value} {...props} />
    </PorgressWrap>
  )
}

export default PorgressBar;