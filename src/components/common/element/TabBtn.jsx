import { useState } from "react";
import styled from "styled-components";
// styled
import * as SC from "component/styled/common/AllStyled";
import { colors, transitions } from "component/styled/common/Variable";
const TabWrap = styled.div`
  position:relative;
`;
const TabList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  flex-direction: ${props => props.$direction || 'row'};
  ${props => `
    ${!(props.$center || props.$right || props.$justifyContent) && `justify-content: flex-start;`};
    ${props.$center && `justify-content: center`};
    ${props.$right && `justify-content: flex-end`};
    ${props.$justifyContent && `justify-content: ${props.$justifyContent}`};
  `}
  gap: ${props => props.$gap || "10px"};


`;
const Btn = styled(SC.Button)`
  display:inline-block;
  padding:10px 15px;
  border:1px solid ${colors.lineColor};
  border-radius:5px;
  color:${colors.textColor};
  transition: ${transitions.base};
  &:hover, &:focus {
    border-color:${colors.green};
    background:${colors.green};
    color:${colors.baseWhite};
  }
  &.active {
    border-color:${colors.green};
    background:${colors.green};
    color:${colors.baseWhite};
  }
  
`;

function TabBtn({propsList, propsEvent, ...props}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabData = propsList ?? ["Tab"];
  const tabClick = (tabEl,tabIdx) => {
    setActiveIndex(tabIdx);
    propsEvent ? propsEvent(tabEl)
    : console.log("Tab Btn Click")
  }
  return (
    <TabWrap className="tab" {...props}>
      <TabList {...props}>
        {
          tabData.map((item,idx) => (
            <li key={idx}>
              <Btn 
                className={activeIndex === idx && "active"}
                onClick={ (e)=> tabClick(item, idx) }>
                {item}
              </Btn>
            </li>
          ))
        }
      </TabList>
    </TabWrap>
  )
}
export default TabBtn;