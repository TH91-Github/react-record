import {CopyToClipboard} from 'react-copy-to-clipboard';
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import { colors } from "component/styled/common/Variable";


function GuideColor() {
  const colorData = {
    id:1,
    title: "Color",
    desc:[
      "경로 : component/styled/common/Variable.js",
      "import { colors } from 'component/styled/common/Variable';",
      "사용 : colorSC.baseWhite"
    ],
    lists: newArrChange(colors)
  }
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  function copyBtn(text){
    alert(text+" 복사가 완료되었습니다.");
  }

  return(
    <>
      <SC.ContBoxInner>
        <S.GuideTitle>
          <TitleBar>{colorData.title}</TitleBar>
        </S.GuideTitle>
        <S.GuideCont>
          <div className="guide__info">
            <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
            <div className="guide__info__desc">
              {
                colorData.desc.map((colorDesc,idx) => (
                  <S.GuideTxtBar key={idx}>
                    {colorDesc}
                  </S.GuideTxtBar>
                ))
              }
            </div>
            <div className="guide__list">
              <S.ColorList>
                {
                  colorData.lists.map((colorItem, idx) => (
                    <li key={idx}>
                      <CopyToClipboard text={colorItem[0]} >
                        <S.ColorBtn $colorCode={colorItem[1]} onClick={()=> copyBtn(colorItem[0])}>
                          <span className="bg">
                            <span className="code">{colorItem[1]}</span>
                          </span>
                          <span className="info">
                            <span className="val">{colorItem[0]}</span>
                          </span>
                        </S.ColorBtn>
                      </CopyToClipboard>
                    </li>
                  ))
                }
              </S.ColorList>              
            </div>
          </div>
        </S.GuideCont>
      </SC.ContBoxInner>
    </>
  )
}



export default GuideColor;