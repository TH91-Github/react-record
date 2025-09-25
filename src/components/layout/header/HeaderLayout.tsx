import { bgOpacity, breakpoints, media } from "assets/style/variables";
import { Logo } from "components/ui/Logo";
import styled from "styled-components";
import { UtilNav } from "./UtilNav";
import { HeaderNav } from "./HeaderNav";
import usePageTitle from "hooks/useDocTitle";
import useToggle from "hooks/useToggle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const HeaderLayout = () => {
  usePageTitle(); // title 변경
  const [isMenuOpen, toggleMenu, setIsMenuOpen] = useToggle(false);
  const location = useLocation();

  // 라우터 이동 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false); // 강제로 닫음
  }, [location.pathname]);

  const menuOpen = () => {
    toggleMenu();
  };
  return (
    // full-layout : full(1920) 사이즈 page일 경우에 사용. 
    <StyleWrap id="header" className={`header ${true ? 'full-layout': ''}`}>
      <div className="header-inner">
        <Logo />
        <HeaderNav 
          isMoOpen={isMenuOpen} 
        />
        <UtilNav 
          isMoOpen={isMenuOpen} 
          moreClickEvnet={menuOpen}
        />
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
&.full-layout {
  .header-inner{
    max-width:${breakpoints.maxPc}px;
  }
}

${media.mo}{
  .header-inner{
    justify-content: space-between;
    padding:0 15px;
  }
}
`;

