import { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { stateDevMode } from "recoilStore/atoms";
import { routerList } from "routes/RouterList";
import styled from "styled-components";

// Header Nav 
const managerViewSecret = JSON.parse(process.env.REACT_APP_MANAGER_VIEW || "[]");
export const HeaderNav = () => {
  const hostname = window.location.hostname;
  const devCheck = useMemo(() => managerViewSecret.includes(hostname), [hostname]);
  const setDevMode = useSetRecoilState(stateDevMode);

  const navLists = useMemo(() => {
    return routerList.filter((routerItem) => {
      if (!routerItem.path) return false;
      if (!devCheck && routerItem.view === false) return false;
      return true;
    });
  }, [devCheck]);

  useEffect(() => {
    setDevMode(devCheck);
  }, [devCheck, setDevMode]);
  
  return ( 
    <StyleWrap className="nav">
      <ul>
        {
          navLists.map((navItem, navIdx) => (
            <li key={'nav' + navIdx}>
              {/* 임시 - guide main 만들기전 기본 페이지 */}
              {/* <NavLink to={'/guide/principles/naming-conventions'} className="nav-item">
                <span>{navItem.title}</span>
              </NavLink> */}
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
  flex-grow:1;
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