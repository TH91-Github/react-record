import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, media, transitions } from "assets/styles/Variable";
import { Button, InnerStyle } from "assets/styles/StyledCm";
import { routerData } from "routes/reRouterData";
import { TextCase } from "utils/textChk";


let scrollY = 0;

function Header ({location}) {
  const [scrollZero, setScrollZero] = useState(false);
  const [memoriesY, setMemoriesY] = useState(0);
  const [menuState, setMenuState] = useState(false);
  const menuList = routerData.filter((item)=> item.title);
  // scroll
  const eventScroll = () => {
    const headerH = document.querySelector('.header').clientHeight;
    scrollY = window.pageYOffset
    scrollY > headerH ? setScrollZero(true) : setScrollZero(false)
  };

  useEffect(()=>{
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
  },[])

  const mobileScrollOff = (chkOnOff) => { // mo 스크롤 막기
    const $Body = document.body;
    if(chkOnOff){
      setMemoriesY(window.pageYOffset);
      $Body.style.position = 'fixed';
      $Body.style.width = '100%';
    }else{
      $Body.removeAttribute('style');
      window.scrollTo({top:memoriesY, behavior: 'instant'});
      setTimeout(() => { // 팝업 닫은 후 이동이 안되었을 경우
        if(window.pageYOffset < 10){
          window.scrollTo({top:memoriesY, behavior: 'instant'});
        }
      },50)
    }
  };
  const menuMoClick = () => {
    mobileScrollOff(!menuState);
    setMenuState(!menuState);
  }
  return (
    <HeaderWrap className={`header ${scrollZero ? 'header-fixed' : ''}`}>
      <HeaderInner className="header__inner">
        <HeaderLogo className="header__logo">
          <HeaderHomeBtn className="header__logo-btn" to={'/'}>
            <HeaderTit className="header__logo-title">TH-Blog</HeaderTit>
          </HeaderHomeBtn>
        </HeaderLogo>
        <HeaderMenu className={`header__menu ${menuState ? 'open' : ''}`}>
          <HeaderMenuLists>
            {
              menuList.map((list, idx) => {
                return <li key={idx}>
                  <HeaderLink to={list.path} className="header__menu-link">
                    <HeaderLinkEn>{TextCase(list.path)}</HeaderLinkEn>
                    <HeaderLinkKr>{list.title}</HeaderLinkKr>
                  </HeaderLink>
                </li>
              })
            }
          </HeaderMenuLists>
          {/* mo 메뉴 on/off */}
        </HeaderMenu>
        <HeaderMoBtn className={menuState && 'open'} onClick={() => menuMoClick() }>
          <span className="txt">MO 메뉴 오픈</span>
        </HeaderMoBtn>
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
  height:80px;
  background:${colors.baseWhite};
  transition:${transitions.base};
  &.header-fixed {
    height:50px;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    box-shadow:0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  ${media.mo} {
    height:70px;
  }
`;
const HeaderInner = styled(InnerStyle)`
  display:flex;
  align-items:center;
  height:100%;
`;
const HeaderLogo = styled.div`
  overflow:hidden;
  position:relative;
  z-index:10;
  width:180px;
  height:100%;
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
  ${media.mo} { 
    width:100%;
  }
`;
const HeaderHomeBtn =styled(NavLink)`
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
`; 
const HeaderTit = styled.span`
  display:block;
  position:absolute;
  z-index:2;
  top:50%;
  left:13px;
  width:60px;
  padding:2px 3px;
  border-top-left-radius:4px;
  border-bottom-left-radius:4px;
  background:${colors.baseWhite};
  font-size:14px;
  box-shadow:4px 2px 2px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);
  color:#000;
`;
const HeaderMenu = styled.div`
  flex-grow:1;
  ${media.mo} {
    display:none;
    position:absolute;
    z-index:2;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    padding:70px 0 50px;
    border:1px solid green;
    background:#fff;
    &.open {
      display:block;
    }
  }
`;
const HeaderMenuLists = styled.ul`
  display:flex;
  gap:50px;
  ${media.mo} {
    flex-direction:column;
    gap:0;
    padding:0 15px;
    border-top:2px solid ${colors.bgGreen};
    & > li {
      border-top:1px solid ${colors.lineColor};
      &:first-child {
        border-top: none;
      }
    }
  }
`;
const HeaderLink = styled(NavLink)`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:2px 5px;
  ${media.mo} {
    width:100%;
    align-items: start;
    padding:10px 0;
  }
  &:hover, &:focus {
    &>span {
      color: ${colors.yellow};
    }
  }
  &.active {
    &>span {
      color: ${colors.green};
    }
  }
`;
const HeaderLinkEn = styled.span`
  font-size:18px;
  font-weight:500;
  color:${colors.textColor};
  transition:${transitions.base};
`;
const HeaderLinkKr = styled.span`
  font-size:14px;
  font-weight:400;
  color:${colors.subTextColor};
  transition:${transitions.base};
`;
const HeaderMoBtn = styled(Button)`
  display:none;
  overflow:hidden;
  position:absolute;
  z-index:10;
  top:50%;
  right:15px;
  width:24px;
  height:24px;
  transform:translateY(-50%);
  &::before, &::after {
    display:block;
    position:absolute;
    width:100%;
    height:2px;
    background:${colors.bgGreen};
    transition:${transitions.base};
    content:"";
  }
  &::before {
    top:0;
    left:0;
  }
  &::after {
    bottom:0;
    left:0;
  }
  & > span{ 
    display:block;
    width:100%;
    height:2px;
    background:${colors.bgGreen};
    text-indent:-9999px;
    transition:${transitions.base};
  }
  &.open {
    &::before {
      top:50%;
      left:50%;
      transform:translate(-50%, -50%) rotate(45deg);
    }
    &::after{
      top:50%;
      left:50%;
      transform:translate(-50%, -50%) rotate(-45deg);
    }
    &>span {
      transform: translateX(105%);
    }
  }
  ${media.mo}{
    display:block;
  }
`;