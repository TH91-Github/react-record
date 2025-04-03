import { breakpoints } from "assets/style/variable";
import { GuideHeading } from "components/pages/guide/GuideHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const DesignPage = () => {

  return (
    <StyleWrap>
      <GuideHeading />
      <div className="content-wrap">
        <Outlet />  
      </div>    
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  
  
`;