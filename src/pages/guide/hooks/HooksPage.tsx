import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const HooksPage = () => {
  return (
    <StyleWrap>
      HooksPage
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;