import { breakpoints, shadow } from "assets/style/Variable";
import { Logo } from "components/common/Logo";
import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";

export const HeaderLayout = () => {
 
  return (
    <StyleWrap id="header" className="header">
      <div className="header-inner">
        <Logo />
        <HeaderNav />
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.header`
  position:absolute;
  z-index:2;
  width:100%;
  ${shadow.shadowLine};
  .header-inner{
    display:flex;
    align-items: center;
    position:relative;
    width:100%;
    max-width:${breakpoints.pc}px;
    height:55px;
    margin:0 auto;
    padding:0 30px;
  }
  .nav {
    margin-left:50px;
  }
`;

