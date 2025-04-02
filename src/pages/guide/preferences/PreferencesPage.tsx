import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const PreferencesPage = () => {
  return (
    <StyleWrap className="preferences">
      PreferencesPage
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;