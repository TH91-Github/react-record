import { IconLogout, IconUser } from "assets/svg/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

// 로그인 on/off
export const UserMenu = () => {

  const handleLogOut = () =>{ 
    console.log('로그아웃')
  }

  return ( 
    <StyleWrap>
      {
        true
        ?
        <NavLink to={'/member'} title="로그인하기">
          <IconUser />
        </NavLink>
        : <button onClick={handleLogOut}>
          <IconLogout />
        </button>
      }
    </StyleWrap>
  )
}
const StyleWrap = styled.div`

`;