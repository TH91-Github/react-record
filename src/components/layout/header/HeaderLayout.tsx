import { bgOpacity, breakpoints } from "assets/style/variables";
import { Logo } from "components/ui/Logo";
import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";

export const HeaderLayout = () => {
  // full-layout : full(1920) 사이즈 page일 경우에 사용. 
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
  position:fixed;
  top:0;
  left:0;
  z-index:20;
  width:100%;
  background:${bgOpacity.white};
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
    .header-inner{
      max-width:${breakpoints.maxPc}px;
    }
  }
`;

