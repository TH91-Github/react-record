
// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";

function GuideTemplate(){
  return (
    <div className="guide">
      <S.BoxInner $margin="30px auto">
          <TitleBar $align="center">
            GuideTemplate
          </TitleBar>
          ⚠️...준비중 🚧
      </S.BoxInner>
    </div>
  )
}


export default GuideTemplate;