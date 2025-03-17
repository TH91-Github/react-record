import { SideLayout } from "components/layout/SideLayout";
import { SideMenu } from "components/pages/guide/SideMenu";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


export const GuidePage = () => {
  return (
    <StyleWrap className="guide">
      {/* side */}
      <SideLayout>
        <SideMenu />
      </SideLayout>
      {/* content */}
      <div className="guide-inner">
      {/* component */}
        <Outlet />
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  display:flex;
  position:relative;
  .side-menu{
    flex-shrink: 0;
  }
  .guide-inner {
    flex-grow:1;
  }
`;