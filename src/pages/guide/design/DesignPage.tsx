import { Outlet } from "react-router-dom";
import styled from "styled-components"


export const DesignPage = () => {
  return (
    <StyleWrap>
      <div className="heading">
        <h2 className="name-tag">Directory Structure</h2>
        <h3 className="title">색상 <span className="color">Color</span></h3>
      </div>
      <Outlet />    
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;