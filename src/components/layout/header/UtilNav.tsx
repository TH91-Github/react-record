import { NavLink } from "react-router-dom";
import styled from "styled-components"


export const UtilNav = () => {
  return (
    <StyleWrap className="util-nav">
      <div className="util-inner">
        <div className="util-item">
          <NavLink to={'/'}>

          </NavLink>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .util-inner{
    display:flex;
  }
`;