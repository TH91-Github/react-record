import { breakpoints } from "assets/style/Variable";
import { Logo } from "components/common/Logo";
import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";

export const HeaderLayout = () => {
  
  return (
    <StyleWrap id="header" className={`header ${true ? 'full-layout': ''}`}>
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
  box-shadow: rgba(17,19,32,0.2) 0px -1px 6px;
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
  &.full-layout {
    max-width:${breakpoints.maxPc}px;
  }
`;

