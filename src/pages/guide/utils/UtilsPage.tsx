import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const UtilsPage = () => {
  return (
    <StyleWrap>
      UtilsPage
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;