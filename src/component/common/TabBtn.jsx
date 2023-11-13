import styled from "styled-components";
// styled
import * as SC from "component/styled/common/AllStyled";
import { colors, transitions } from "component/styled/common/Variable";

const TabWrap = styled.div`
  position:relative;
`;
const TabList = styled.ul`
  display:flex;
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
`;

function TabBtn({propsList, propsEvent, ...props}) {
  const tabData = propsList ?? ["Tab"];
  const tabClick = (tabEl) => {
    propsEvent ? propsEvent(tabEl)
    : console.log("Tab Btn Click")
  }
  console.log(propsList)
  return (
    <TabWrap {...props}>
      <TabList {...props}>
        {
          tabData.map((item,idx) => (
            <li key={idx}>
              <Btn onClick={ (e)=> tabClick(item) }>
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