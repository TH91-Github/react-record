import {CopyToClipboard} from 'react-copy-to-clipboard';
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as S from "component/styled/common/AllStyled";
import * as SG from "component/pages/guide/styled/GuideStyled";
import { fonts } from "component/styled/common/Variable";

function GuideFont() {
  const fontData = {
    id:1,
    title: "Font",
    desc:[
      "경로 : component/styled/common/Variable.js",
      "import { breakpoints } from 'component/styled/common/Variable';",
      "사용 : fonts.fontB"
    ],
    lists: newArrChange(fonts)
  }
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  function copyBtn(text){
    alert(text+" 복사가 완료되었습니다.");
  }

  return(
    <>
      <S.ContBoxInner>
        <SG.GuideTitle>
          <TitleBar>{fontData.title}</TitleBar>
        </SG.GuideTitle>
        <SG.GuideCont>
          <div className="guide__info">
            <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
            <div className="guide__info__desc">
              {
                fontData.desc.map((breakpointDesc,idx) => (
                  <SG.GuideTxtBar key={idx}>
                    {breakpointDesc}
                  </SG.GuideTxtBar>
                ))
              }
            </div>
            <div className="guide__list">
              <SG.FontList>
                {
                  fontData.lists.map((fontItme, idx) => (
                    <li key={idx}>
                      <CopyToClipboard text={fontItme[0]}>
                        <SG.FontBtn onClick={()=>copyBtn(fontItme[0])}>
                          <p>{`${fontItme[0]} : ${fontItme[1]}`}</p>
                        </SG.FontBtn>
                      </CopyToClipboard>
                    </li>
                  ))
                }
              </SG.FontList>
            </div>
          </div>
        </SG.GuideCont>
      </S.ContBoxInner>
    </>
  )
}



export default GuideFont;