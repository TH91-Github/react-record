import { bgColor, colors, media } from "assets/style/variables";
import { SvgCube } from "assets/svg/Common";
import { SearchModule } from "components/modules/SearchModule";
import useToggle from "hooks/useToggle";
import { useRecoilValue } from "recoil";
import { stateUserColor } from "recoilStore/userAtoms";
import styled from "styled-components";
import { GuideNav } from "./GuideNav";
import { NavLink } from "react-router-dom";

export const GuideSideMenu = () => {
  const pointColor = useRecoilValue(stateUserColor); 

  return(
    <StyleWrap className="nav-wrap">
      <div className="nav-inner">
        <div className="nav-heading">
          <h2 className="title">
            <NavLink to="/">
              <span className="svg"><SvgCube $fill={pointColor} /></span>
              <span>가이드</span>
            </NavLink>
          </h2>
        </div>
        {/* <div className="nav-item">
          <SearchModule 
            id="nav"
            isBtn={false} 
            placeholder={'검색 기능 작업 진행 중...'} 
            styleOpt={{$line:"none"}}
          />
        </div> */}
        <div className="nav-item">
          <p className="title">목록</p>
          <GuideNav />
        </div>
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
  .nav-inner{
  }
  .nav-heading{
    padding:20px 30px;
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
      }
    }  
  }
  .nav-item {
    padding:15px 30px;
    border-top:1px solid #dbdbdb;
    .search {
      .icon{
        width:20px;
        height:20px;
      }
      .input-item{
        input {
          height:30px;
        }
      }
    }
    .title{
      font-size:18px;
    }
  }
  .search {
    gap:5px;
  }
  ${media.mo}{
    .nav-heading{
      padding:20px 15px;
    }
    .nav-item{
      padding:15px;
    }
  }
`;