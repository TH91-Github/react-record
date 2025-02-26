import { SideMenu } from "components/pages/guide/SideMenu";
import styled from "styled-components";


export const GuidePage = () => {
  return (
    <StyleWrap className="guide">
      {/* side */}
      <SideMenu />
      {/* content */}
      <div className="guide-inner">

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