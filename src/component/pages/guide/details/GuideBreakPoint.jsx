import {CopyToClipboard} from 'react-copy-to-clipboard';
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as S from "component/styled/common/AllStyled";
import * as SG from "component/pages/guide/styled/GuideStyled";
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
    <>
      <SG.GuideBoxInner>
        <SG.GuideTitle>
          <TitleBar>{breakpointData.title}</TitleBar>
        </SG.GuideTitle>
        <SG.GuideCont>
          <div className="guide__info">
            <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
            <div className="guide__info__desc">
              {
                breakpointData.desc.map((breakpointDesc,idx) => (
                  <SG.GuideTxtBar key={idx}>
                    {breakpointDesc}
                  </SG.GuideTxtBar>
                ))
              }
            </div>
            <div className="guide__list">
              <SG.BreakpointList>
                {
                  breakpointData.lists.map((breakPointItme, idx) => (
                    <li key={idx}>
                      <CopyToClipboard text={breakPointItme[0]}>
                        <SG.BreakpointBtn onClick={()=>copyBtn(breakPointItme[0])}>
                          <span className="screen">
                            <S.colorTag className="val" $color={colors.textColor}>{`${breakPointItme[1]}px;`}</S.colorTag>
                          </span>
                          <S.colorTag $color={colors.rede76647}>{`${breakPointItme[0]}`}</S.colorTag>
                        </SG.BreakpointBtn>
                      </CopyToClipboard>
                    </li>
                  ))
                }
              </SG.BreakpointList>
            </div>
          </div>
        </SG.GuideCont>
      </SG.GuideBoxInner>
    </>
  )
}



export default GuideBreakPoint;