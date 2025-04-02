import { GuideHeading } from "components/pages/guide/GuideHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

export const UIElementsPage = () => {
  return(
    <StyleWrap className="ui-elements">
      <GuideHeading />
      <Outlet />
    </StyleWrap>  
  )
}
const StyleWrap = styled.div`

`;