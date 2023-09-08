
import Ing from "component/common/Ing";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";

function GuideTemplate(){
  return (
    <div className="guide">
      <S.BoxInner $margin="0 auto">
        <TitleBar $align="center">
          GuideTemplate
        </TitleBar>
        <Ing>⚠️준비중🚧</Ing>
      </S.BoxInner>
    </div>
  )
}


export default GuideTemplate;