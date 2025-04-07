import { GuideHeading } from "components/pages/guide/GuideHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

export const UIElementsPage = () => {
  return(
    <StyleWrap className="ui-elements">
      <GuideHeading />
      <div className="content-wrap">
        <Outlet />  
      </div>    
    </StyleWrap>  
  )
}
const StyleWrap = styled.div`

`;