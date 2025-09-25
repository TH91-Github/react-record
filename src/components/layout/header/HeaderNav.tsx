import { colors, media } from "assets/style/variables";
import { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { stateDevMode, stateHeaderHeight } from "recoilStore/atoms";
import { routerList } from "routes/RouterList";
import styled from "styled-components";
import { cn } from "utils/common";

// 🔹Header Nav 

const managerViewSecret = JSON.parse(process.env.REACT_APP_MANAGER_VIEW || "[]");
interface HeaderNavPropsType {
  isMoOpen:boolean,
}
export const HeaderNav = ({isMoOpen}:HeaderNavPropsType) => {
  const hostname = window.location.hostname;
  const devCheck = useMemo(() => managerViewSecret.includes(hostname), [hostname]);
  const headerHeight = useRecoilValue(stateHeaderHeight);
  const setDevMode = useSetRecoilState(stateDevMode);

  const navLists = useMemo(() => {
    return routerList.filter((routerItem) => {
      if (!routerItem.path) return false;
      if (routerItem.view === false) return false;
      if(!devCheck && routerItem.view === 'dev') return false;
      return true;
    });
  }, [devCheck]);

  useEffect(() => {
    setDevMode(devCheck);
  }, [devCheck, setDevMode]);
  
  return ( 
    <StyleWrap 
      className={cn('nav', isMoOpen && 'open')}
      $headerHeight={ headerHeight || 55}
    >
      <ul>
        {
          navLists.map((navItem, navIdx) => (
            <li key={'nav' + navIdx}>
              {/* 임시 - guide main 만들기전 기본 페이지 */}
              {/* <NavLink to={'/guide/principles/naming-conventions'} className="nav-link">
                <span>{navItem.title}</span>
              </NavLink> */}
              <NavLink to={navItem.path ?? '/'} className="nav-link">
                <span>{navItem.title}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </StyleWrap>
  )
}

type StyleWrapType = {
  $headerHeight:number
}
const StyleWrap = styled.nav<StyleWrapType>`
flex-grow:1;
margin-left:50px;
& > ul {
  display:flex;
  align-items:center;
}
.nav-link{
  display:inline-block;
  padding:8px 15px;
  font-size:15px;
  font-weight:600;
}
${media.mo}{
  display:none;
  position:absolute;
  top:${({$headerHeight}) => $headerHeight}px;
  left:0;
  width:100%;
  height: calc(100svh - ${({$headerHeight}) => $headerHeight}px);
  margin:0;
  border-top:1px solid ${colors.mSlateBlue};
  background:#fff;
  & > ul {
    display:block;
  }
  &.open {
    display:block;
    animation: gnbOpenAni .3s both;
    @keyframes gnbOpenAni{
      0%{opacity:0;}
      100%{opacity:1;}
    }
  }
  

  .nav-link{
    display:block;
    padding:20px 15px;
    border-bottom:1px solid ${colors.lineColor};
    transition: color var(--transition), border-color var(--transition);
    &.active {
      border-color:${colors.mSlateBlue};
      color:${colors.mSlateBlue};
    }
  }
}
`;