import { colors, media } from "assets/style/Variable";
import { SvgCube } from "assets/svg/common";
import { useRecoilValue } from "recoil";
import { stateColor } from "recoil/atoms";
import styled from "styled-components";

export const SideMenu = () => {
  const color = useRecoilValue(stateColor); 

  return(
    <StyleWrap className="side-menu">
      <div className="side-header">
        <h2>
          <span className="svg"><SvgCube fill={color} /></span>
          <span>전체 가이드</span>
        </h2>
      </div>
      <div className="side-search">
        
      </div>
      <div className="side-menu">

      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  width:300px;
  height:100svh;
  padding:0 30px;
  border-right:1px solid ${colors.lineColor};
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