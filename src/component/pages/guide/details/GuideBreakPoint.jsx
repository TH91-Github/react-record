import {CopyToClipboard} from 'react-copy-to-clipboard';
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import { breakpoints, colors } from "component/styled/common/Variable";

function GuideBreakPoint() {
  const breakpointData = {
    id:1,
    title: "Breakpoint",
    desc:[
      "경로 : component/styled/common/Variable.js",
      "import { breakpoints } from 'component/styled/common/Variable';",
      "사용 : breakpoints.maxPc"
    ],
    lists: newArrChange(breakpoints)
  }
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  function copyBtn(text){
    alert(text+" 복사가 완료되었습니다.");
  }
  return(
    <S.GuidDetailWrap>
      <SC.ContBoxInner>
        <S.GuideTitle>
          <TitleBar>{breakpointData.title}</TitleBar>
        </S.GuideTitle>
        <S.GuideCont>
          <div className="guide__info">
            <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
            <div className="guide__info__desc">
              {
                breakpointData.desc.map((breakpointDesc,idx) => (
                  <S.GuideTxtBar key={idx}>
                    {breakpointDesc}
                  </S.GuideTxtBar>
                ))
              }
            </div>
            <div className="guide__list">
              <S.BreakpointList>
                {
                  breakpointData.lists.map((breakPointItme, idx) => (
                    <li key={idx}>
                      <CopyToClipboard text={breakPointItme[0]}>
                        <S.BreakpointBtn onClick={()=>copyBtn(breakPointItme[0])}>
                          <span className="screen">
                            <SC.ColorTag className="val" $color={colors.textColor}>{`${breakPointItme[1]}px;`}
                            </SC.ColorTag>
                          </span>
                          <SC.ColorTag $color={colors.rede76647}>{`${breakPointItme[0]}`}
                          </SC.ColorTag>
                        </S.BreakpointBtn>
                      </CopyToClipboard>
                    </li>
                  ))
                }
              </S.BreakpointList>
            </div>
          </div>
        </S.GuideCont>
      </SC.ContBoxInner>
    </S.GuidDetailWrap>
  )
}



export default GuideBreakPoint;