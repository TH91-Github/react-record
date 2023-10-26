import {CopyToClipboard} from 'react-copy-to-clipboard';
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SG from "component/pages/guide/styled/GuideStyled";
import { colors } from "component/styled/common/Variable";


function GuideColor() {
  const colorVar = newArrChange(colors);
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  const colorData = {
    id:1,
    title: "Color",
    desc:[
      "SCSS, Styled var 둘 다 수정.",
      "SCSS : assets/scss/_variables.scss",
      "경로 : component/styled/common/Variable.js",
      "import { colors } from 'component/styled/common/Variable';",
      "사용 : colors.baseWhite"
    ],
    lists: newArrChange(colors)
  }

  function copyBtn(text){
    alert(text+" 복사가 완료되었습니다.");
  }

  return(
    <>
      <SG.GuideBoxInner>
        <SG.GuideTitle>
          <TitleBar>{colorData.title}</TitleBar>
        </SG.GuideTitle>
        <SG.GuideCont>
          <div className="guide__info">
            <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
            <div className="guide__info__desc">
              {
                colorData.desc.map((colorDesc,idx) => (
                  <SG.GuideTxtBar key={idx}>
                    {colorDesc}
                  </SG.GuideTxtBar>
                ))
              }
            </div>
            <div className="guide__list">
              <SG.ColorList>
                {
                  colorData.lists.map((colorItem, idx) => (
                    <li key={idx}>
                      <CopyToClipboard text={colorItem[0]} >
                        <SG.ColorBtn $colorCode={colorItem[1]} onClick={()=> copyBtn(colorItem[0])}>
                          <span className="bg">
                            <span className="code">{colorItem[1]}</span>
                          </span>
                          <span className="info">
                            <span className="val">{colorItem[0]}</span>
                          </span>
                        </SG.ColorBtn>
                      </CopyToClipboard>
                    </li>
                  ))
                }
              </SG.ColorList>              
            </div>
          </div>
        </SG.GuideCont>
      </SG.GuideBoxInner>
    </>
  )
}



export default GuideColor;