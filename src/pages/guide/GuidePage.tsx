import { guideStyle } from "assets/style/guide/guideStyle";
import { breakpoints } from "assets/style/variables";
import { SideLayout } from "components/layout/SideLayout";
import { GuideAbout } from "components/pages/guide/GuideAbout";
import { GuideSideMenu } from "components/pages/guide/GuideSideMenu";
import { useCallback, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

export const GuidePage = () => {
  const location = useLocation();
  const showGuide = location.pathname === "/" || location.pathname === "/guide" || location.pathname === "/guide/"; // 임시 main, guide 페이지가 완벽하지 않기에 이후 수정.
  // ✅ 최소 사이즈에 대한 안내
  const handleResize = useCallback(() => {
    if(window.innerWidth < breakpoints.tablet) {
      // 팝업 안내
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <StyleWrap className="guide">
      {/* side */}
      <SideLayout $sideWidth={300}>
        <GuideSideMenu />
      </SideLayout>
      {/* content */}
      <div className="guide-inner">
        {
          showGuide ? <GuideAbout /> : <Outlet />
        }
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  min-width:${breakpoints.tablet}px;
  .guide-inner {
    position:relative;
    width: 100%;
    padding-left:300px;
  }
  ${guideStyle}
`;