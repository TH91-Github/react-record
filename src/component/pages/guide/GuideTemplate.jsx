
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
        <hr />
        <p>
          컴포넌트, 기능, 스타일 Scss가이드, 스타일 컴포넌트등<br/>
          확인할 수 있는 곳
        </p>
      </S.BoxInner>
    </div>
  )
}


export default GuideTemplate;