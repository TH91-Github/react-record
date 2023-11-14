import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routerData } from "data/routerData";
import { breakpoints } from "component/styled/common/Variable";
function Header () {
  return (
    <HeaderWrap>
      <HeaderInner>
        z
      </HeaderInner>
    </HeaderWrap>
  )
}
export default Header;

const HeaderWrap = styled.div`
  position:relative;
  box-shadow:0px 0px 10px rgba(0, 0, 0, 0.25);
`;
const HeaderInner = styled.div`
  max-width:${breakpoints.table}px;
  margin:0 auto;
  padding:0 30px 80px;
`