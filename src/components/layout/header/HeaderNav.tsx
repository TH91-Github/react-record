import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { routerList } from "routes/RouterList";
import styled from "styled-components"

// Header Nav 
export const HeaderNav = () => {

  const navLists = useMemo(()=>{
    return routerList.filter((routerItem) => routerItem.path);
  },[])

  return (
    <StyleWrap className="nav">
      <ul>
        {
          navLists.map((navItem, navIdx) => (
            <li key={'nav' + navIdx}>
              <NavLink to={navItem.path ?? '/'} className="nav-item">
                <span>{navItem.title}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </StyleWrap>
  )
}
const StyleWrap = styled.nav`
  & > ul {
    display:flex;
    align-items:center;
  }
  .nav-item{
    display:inline-block;
    padding:8px 15px;
    font-size:15px;
    font-weight:600;
  }
`;