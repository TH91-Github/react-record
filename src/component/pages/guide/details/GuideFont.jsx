import {CopyToClipboard} from 'react-copy-to-clipboard';
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import { fonts } from "component/styled/common/Variable";

function GuideFont() {
  const fontData = {
    id:1,
    title: "Font",
    desc:[
      "경로 : component/styled/common/Variable.js",
      "import { breakpoints } from 'component/styled/common/Variable';",
      "사용 : fontSC.fontB"
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
    <S.GuidDetailWrap>
      <SC.ContBoxInner>
        <S.GuideTitle>
          <TitleBar>{fontData.title}</TitleBar>
        </S.GuideTitle>
        <S.GuideCont>
          <div className="guide__info">
            <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
            <div className="guide__info__desc">
              {
                fontData.desc.map((breakpointDesc,idx) => (
                  <S.GuideTxtBar key={idx}>
                    {breakpointDesc}
                  </S.GuideTxtBar>
                ))
              }
            </div>
            <div className="guide__list">
              <S.FontList>
                {
                  fontData.lists.map((fontItme, idx) => (
                    <li key={idx}>
                      <CopyToClipboard text={fontItme[0]}>
                        <S.FontBtn onClick={()=>copyBtn(fontItme[0])}>
                          <p>{`${fontItme[0]} : ${fontItme[1]}`}</p>
                        </S.FontBtn>
                      </CopyToClipboard>
                    </li>
                  ))
                }
              </S.FontList>
            </div>
          </div>
        </S.GuideCont>
      </SC.ContBoxInner>
    </S.GuidDetailWrap>
  )
}



export default GuideFont;