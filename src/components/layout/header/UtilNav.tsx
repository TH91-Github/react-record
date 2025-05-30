import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stateDevMode } from "recoil/atoms";
import styled from "styled-components"


export const UtilNav = () => {
  const devMode = useRecoilValue(stateDevMode);
  
  if(!devMode) return null
  return (
    <StyleWrap className="util-nav">
      <div className="util-inner">
        <div className="util-item">
          <NavLink to={'/'}>
test
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