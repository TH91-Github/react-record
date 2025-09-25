import { bgColor, colors, textColor } from "assets/style/variables";
import { SideLayout } from "components/layout/SideLayout";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stateUserColor } from "recoilStore/userAtoms";
import styled from "styled-components";

interface HubSideMenuPropsType {
  $sideWidth : number;
}
export const HubSideMenu = ({$sideWidth} : HubSideMenuPropsType) => {
  const pointColor = useRecoilValue(stateUserColor); 

  const handleNavClick = () => {

  }
  return( 
    <SideLayout $sideWidth={$sideWidth}>
      <StyleWrap className="hub-side">
        <div className="nav-inner">
          <div className="nav-heading">
            <h2 className="title">
              <NavLink to="/space">
                <span>공간</span>
              </NavLink>
            </h2>
            <p className="desc">방을 만들어 참여하세요!</p>
          </div>
          <div className="nav-item">
            <p className="tit">카테고리</p>
            <ul className="nav-lists">
              <li>
                <button
                  type="button"
                  className="nav-btn active"
                  onClick={handleNavClick}
                >
                  <span>전체</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={handleNavClick}
                >
                  <span>여행</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={handleNavClick}
                >
                  <span>기타</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </StyleWrap>
    </SideLayout>
  )
}

const StyleWrap = styled.div`
overflow-y:auto;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
.nav-heading{
  padding:20px 15px 20px 30px;
  .svg {
    display:inline-block;
    position:relative;
    width:24px;
    height:24px;
  }
  .title {
    display:inline-block;
    & > a { 
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:600;
      color:${colors.blue};
    }
  }
  .desc{
    margin-top:5px;
    font-size:14px;
    color:${textColor.subText};
  }
}
.nav-item{
  padding:10px 0 20px;
  .tit{
    padding:10px 15px 10px 30px;
    font-size:14px;
    color:${textColor.subText};
  }
}
.nav-lists{
  margin-top:10px;
}
.nav-btn{
  display:block;
  position:relative;
  width:100%;
  padding:10px 15px 10px 30px;
  font-weight:500;
  color:${textColor.text};
  text-align:left;
  &.active { 
    color:#fff;
    background-color:${colors.blue};
  }
}
`;