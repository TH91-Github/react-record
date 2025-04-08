import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

export const HooksPage = () => {
  return (
    <StyleWrap className="hook">
      <GuidePageHeading />
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;