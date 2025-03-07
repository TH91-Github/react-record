import { colors, media } from "assets/style/Variable";
import { SvgCube } from "assets/svg/common";
import useToggle from "hooks/useToggle";
import { useRecoilValue } from "recoil";
import { stateColor, stateHeaderHeight } from "recoil/atoms";
import { guideList } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

const GUIDE_ITEMS = guideList;
export const SideMenu = () => {
  const headerHeight = useRecoilValue(stateHeaderHeight);
  const pointColor = useRecoilValue(stateColor); 
  const [isExtend, useExtend] = useToggle(false);

  return(
    <StyleWrap 
      $headerHeight={headerHeight}
      className={
        `side-menu ${isExtend ? 'extend': ''}`
      }
    >
      <div className="side-inner">
        <div className="side-header">
          <h2>
            <span className="svg"><SvgCube fill={pointColor} /></span>
            <span>전체 가이드</span>
          </h2>
        </div>
        <div className="side-search">
          <input type="text" />
        </div>
        <div className="side-menu">
          <h3>Menu</h3>
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
  width:300px;
  height:calc(100svh - ${props => (props.$headerHeight || 0)}px);
  .side-inner{
    position:relative;
    width:100%;
    height:100%;
    padding:0 30px;
    border:1px solid ${colors.lineColor};
    background:#f5f6fa;
  }
  .side-header{
    padding-top:30px;
    .svg {
      display:inline-block;
      position:relative;
      width:24px;
      height:24px;
    }
    h2 {
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:600;
    }  
  }
  ${media.mo}{

  }
`;