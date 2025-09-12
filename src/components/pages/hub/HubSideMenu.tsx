import { bgColor, colors, textColor } from "assets/style/variables";
import useToggle from "hooks/useToggle";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stateUserColor } from "recoilStore/userAtoms";
import styled from "styled-components"

export const HubSideMenu = () => {
  const pointColor = useRecoilValue(stateUserColor); 
  const [isExtend, useExtend] = useToggle(false);

  const handleNavClick = () => {

  }
  return( 
    <StyleWrap>
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
  
        {
          //mo
          false &&  <div className="extend-btn">
          <button
            type="button"
            onClick={useExtend}>
            <span>{isExtend ? '펼치기' : '접기' }</span>
          </button>
        </div>
        }
        
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  overflow-y:auto;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-right:1px solid ${colors.lineColor};
  background:${bgColor.sideWite};
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