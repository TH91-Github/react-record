import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

export const UIElementsPage = () => {
  return(
    <StyleWrap className="ui-elements">
      <GuidePageHeading />
      <div className="content-wrap">
        <Outlet />  
      </div>    
    </StyleWrap>  
  )
}
const StyleWrap = styled.div`

`;