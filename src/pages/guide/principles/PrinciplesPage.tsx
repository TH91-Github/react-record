import { DepthHeader } from "components/pages/guide/DepthHeader";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

export const PrinciplesPage = () => {
  return (
    <StyleWrap>
      {/* <DepthHeader title={'principlddes'}/> */}
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;