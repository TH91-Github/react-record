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
      <div className="guide-content">
      {/* component */}
        <Outlet />
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  .guide-content {
    position:relative;
    width: 100%;
    padding-left:300px;
  }
`;