import { guideStyle } from "assets/style/guide/guideStyle";
import { breakpoints } from "assets/style/variables";
import { SideLayout } from "components/layout/SideLayout";
import { SideMenu } from "components/pages/guide/SideMenu";
import { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const GuidePage = () => {
  
  // ✅ 최소 사이즈에 대한 안내
  const handleResize = useCallback(() => {
    console.log(window.innerWidth)
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
      <SideLayout>
        <SideMenu />
      </SideLayout>
      {/* content */}
      <div className="guide-content">
      {/* component */}
        <Outlet />
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  min-width:${breakpoints.tablet};
  .guide-content {
    position:relative;
    width: 100%;
    padding-left:300px;
  }
  ${guideStyle}
`;