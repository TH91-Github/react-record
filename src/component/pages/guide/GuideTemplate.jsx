
import Ing from "component/common/Ing";

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
        <Ing $margin="10px 0 0 0">⚠️준비중🚧</Ing>
      </S.BoxInner>
    </div>
  )
}


export default GuideTemplate;