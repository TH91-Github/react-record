import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const PreferencesPage = () => {
  return (
    <StyleWrap>
      PreferencesPage
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;