import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routerData } from "data/routerData";
import { breakpoints, colors, media, transitions } from "component/styled/common/Variable";
import * as SC from "component/styled/common/AllStyled";
function Header ({location}) {
  const [navChk, setNavChk] = useState();
  let scrolly = 0;

  const navOnOff = () => {
    setNavChk(!navChk);
    mobileScrollOff(!navChk);
  }
  useEffect(() => { //
    setNavChk(false);
    return () => {
      mobileScrollOff(false);
    }
  },[location])

  const mobileScrollOff = (chkOnOff) => { // mo 스크롤 막기
    const tBody = document.body;
    if(chkOnOff){
      scrolly = window.pageYOffset;
      tBody.style.position = 'fixed';
      tBody.style.width = '100%';
    }else{
      tBody.removeAttribute('style');
      window.scrollTo({top:scrolly, behavior: 'instant'});
      setTimeout(() => { // 팝업 닫은 후 이동이 안되었을 경우
        if(window.pageYOffset < 10){
          window.scrollTo({top:scrolly, behavior: 'instant'});
        }
      },50)
    }
  };

  return (
    <HeaderWrap >
      <HeaderInner>
        <HeaderLogo>
          <NavLink to="/" className="logo-link">
            <HeaderTit>TH-91</HeaderTit>
          </NavLink>
        </HeaderLogo>
        <HeaderNav className={navChk &&'open'}>
          <NavList>
            {
              routerData.map((link, idx) => (
                // 0 은 index 페이지이
                idx > 0 && 
                <li key={link.title}>
                  <NavLink to={link.path} className="nav-link">
                    {link.title}
                  </NavLink>
                </li>
              ))
            }
          </NavList>
        </HeaderNav>
        <NavBtn className={navChk &&'open'} onClick={()=> navOnOff() }>
          <span>{navChk ? 'Off' : 'Open' }</span>
        </NavBtn>
      </HeaderInner>
    </HeaderWrap>
  )
}
export default Header;

const HeaderWrap = styled.div`
  position:fixed;
  z-index:10;
  top:0;
  left:0;
  width:100%;
  background:${colors.baseWhite};
  box-shadow:0px 0px 10px rgba(0, 0, 0, 0.25);
`;
const HeaderInner = styled.div`
  max-width:${breakpoints.table}px;
  margin:0 auto;
  padding:0 30px;
  ${media.pc}{
    display:flex;
    flex-wrap: wrap;
    gap:50px;
  }
  ${media.mo}{
    padding:0 15px;
  }
`
const HeaderLogo = styled.div`
  overflow:hidden;
  position:relative;
  width:80px;
  height:50px;
  &::before, &::after {
    display:block;
    position:absolute;
    top:50%;
    width:35px;
    height:35px;
    border-radius:50%;
    transform:translateY(-50%);
    content:"";
  }
  &::before {
    left:20px;
    background:${colors.baseWhite};
    border:1px solid ${colors.yellow};
  }
  &::after{
    left:0;
    background:${colors.green};
  }
  .logo-link{
    display:inline-block;
    position:absolute;
    z-index:1;
    top:50%;
    left:0;
    width:50px;
    height:2px;
    background:${colors.baseWhite};
    transform: translateY(-50%);
    &::before{
      position:absolute;
      top:50%;
      left:-50%;
      width:50%;
      height:2px;
      background:${colors.baseWhite};
      transform: translateY(-50%);
      content:"";
    }
    &::after {
      position:absolute;
      top:50%;
      left:0;
      width:10%;
      height:2px;
      background:${colors.blue};
      transform: translateY(-50%);
      animation: logo_bar 2s ease infinite;
      content:"";
    }
    @keyframes logo_bar {
      0%{left:-20%}
      100%{left:50%}
    }
  }
`;
const HeaderTit = styled.span`
  display:inline-block;
  position:absolute;
  z-index:2;
  top:50%;
  left:13px;
  width:50px;
  padding:2px 3px;
  border-top-left-radius:4px;
  border-bottom-left-radius:4px;
  background:${colors.baseWhite};
  font-size:14px;
  box-shadow:4px 2px 2px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);
  color:#000;
`;
const HeaderNav = styled.div`
  &.open {
    display:block;
  }
  ${media.mo} {
    display:none;
    position:fixed;
    z-index:999;
    top:50px;
    left:0;
    width:100%;
    height:100%;
    background:${colors.baseWhite};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  }
`
const NavList = styled.ul`
  display:flex;
  .nav-link{
    display:inline-block;
    padding:15px;
    transition:${transitions.base};
    color:#000;
    cursor:pointer;
    &.active {
      color: ${colors.green};
      &:focus {
        color: ${colors.green};
      }
    }
    &:hover, &:focus {
      color: ${colors.yellow};
    }
  }
  ${media.mo} {
    display:block;
    .nav-link {
      display:block;
      border-top: 1px solid #dbdbdb;
    }
  }
`
const NavBtn = styled(SC.Button)`
  display:none;
  overflow:hidden;
  position:absolute;
  z-index:10;
  top:50%; 
  right:15px;
  width:30px;
  height:20px;
  border:none;
  border-radius:0;
  text-indent:-9999px;
  transform:translateY(-50%);
  &::after {
    position:absolute;
    top:50%;
    left:50%;
    width:100%;
    height:2px;
    background: ${colors.baseBlack};
    transform: translate(-50%, -50%);
    transition:all .3s;
    content:"";
  }
  & > span {
    &::before, &::after {
      position:absolute;
      top:0px;
      left:50%;
      width: 100%;
      height:2px;
      background: ${colors.baseBlack};
      transform: translateX(-50%);
      transition:${transitions.base};
      content:"";
    }
    &::after{ 
      top:auto;
      bottom:0px;
      transform: translateX(-50%);
    }
  }
  &.open {
    &::after { 
      left:105%;
      background:${colors.green};
      transform:translateX(0);
    }
    & > span {
      &::before, &::after { 
        top:50%;
        left:50%;
        background:${colors.green};
        transform: translate(-50%,-50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
  }
  ${media.mo} {
    display:block;
  }
`;