import React from "react";
import { styled } from "styled-components";

const Porgress = styled.span`
  display:inline-block;
  overflow:hidden;
  position:relative;
  width:100%;
`;
const Bar = styled.span`
  display:inline-block;
  position:absolute;
  top:0;
  left:0;

`;

function PorgressBar ({...props}) {
  return (
    <Porgress {...props}>
      
    </Porgress>
  )
}

export default PorgressBar;