import { colors, media } from "assets/style/Variable";
import { SvgCube } from "assets/svg/common";
import { Search } from "components/modules/Search";
import useToggle from "hooks/useToggle";
import { useRecoilValue } from "recoil";
import { stateColor } from "recoil/atoms";
import { guideList } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

const GUIDE_ITEMS = guideList;
export const SideNav = () => {
  const pointColor = useRecoilValue(stateColor); 
  const [isExtend, useExtend] = useToggle(false);

console.log(GUIDE_ITEMS)

  return(
    <StyleWrap className={`nav-wrap ${isExtend ? 'extend': ''}`}>
      <div className="nav-inner">
        <div className="nav-head">
          <h2 className="title">
            <span className="svg"><SvgCube fill={pointColor} /></span>
            <span>전체 가이드</span>
          </h2>
        </div>
        <div className="nav-item">
          <Search placeholder={'검색 기능 작업 진행 중...'}/>
        </div>
        <div className="nav-item">
          <h3 className="title">Menu</h3>
          <nav className="nav">
            <ul>
              {
                GUIDE_ITEMS.map((navItem,idx) => (
                  <li key={'guide-nav-'+idx}>
                    <span>
                      {navItem.title}
                    </span>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div className="extend-btn">
          <button
            type="button"
            onClick={useExtend}>
            <span>{isExtend ? '펼치기' : '접기' }</span>
          </button>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  width:100%;
  height:100%;
  border-right:1px solid ${colors.lineColor};
  background:#f5f6fa;
  .nav-inner{
  }
  .nav-head{
    padding:20px;
    .svg {
      display:inline-block;
      position:relative;
      width:24px;
      height:24px;
    }
    .title {
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:600;
    }  
  }
  .nav-item {
    padding:15px 20px;
    border-top:1px solid #dbdbdb;
  }
  .extend-btn {
    position:absolute;
    top:30px;
    right:30px;
  }
  ${media.mo}{

  }
`;