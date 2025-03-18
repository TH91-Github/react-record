import { Outlet } from "react-router-dom";
import styled from "styled-components";

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