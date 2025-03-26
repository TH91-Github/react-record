import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const DesignPage = () => {
  return (
    <StyleWrap>
      DesignPage
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;