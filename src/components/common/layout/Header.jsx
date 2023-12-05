import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { breakpoints, colors, media } from "assets/styles/Variable";
import { Button } from "assets/styles/StyledCm";

function Header () {
  const navi = useNavigate();
  return (
    <HeaderWrap className="header">
      <HeaderInner className="header__inner">
        <HeaderLogo className="header__logo">
          <HeaderHomeBtn className="header__logo-btn" onClick={()=>navi('/')}>
            <HeaderTit className="header__logo-title">TH-Blog</HeaderTit>
          </HeaderHomeBtn>
        </HeaderLogo>
        <HeaderMenu className="header__menu">
          <HeaderMenuLists>

          </HeaderMenuLists>
          <HeaderMenuBtn>

          </HeaderMenuBtn>
        </HeaderMenu>
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
  border:1px solid red;
`;
const HeaderInner = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  max-width:${breakpoints.tab}px;
  min-height:50px;
  margin:0 auto;
  padding:0 30px;
`;
const HeaderLogo = styled.div`
  overflow:hidden;
  position:relative;
  width:100px;
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
const HeaderHomeBtn =styled(Button)`
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

`;
const HeaderMenuLists = styled.ul`

`;
const HeaderMenuBtn = styled(Button)`
  display:none;
  position:absolute;
  width:30px;
  height:30px;
  border:1px solid red;
  ${media.mo}{
    display:block;
  }
`;