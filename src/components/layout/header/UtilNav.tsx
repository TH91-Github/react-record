import { IconLogout, IconUser } from "assets/svg/icons";
import { UserMenu } from "components/features/auth/UserMenu";
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
          <UserMenu />
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