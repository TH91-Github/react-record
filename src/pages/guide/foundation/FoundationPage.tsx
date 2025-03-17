import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const FoundationPage = () => {
  return (
    <StyleWrap>
      FoundationPage
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;