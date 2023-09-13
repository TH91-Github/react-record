import Banner from "component/common/Banner";
import TitleBar from "component/common/TitleBar";
// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import { colors } from "component/styled/common/Variable";

function GuideTemplate(){
  return (
    <div className="guide">
      <Banner $center>
        <TitleBar fontSize="32px" color={colors.whiteColor}>
          GuideTemplate
        </TitleBar>
      </Banner>
      <S.BoxWrap>
        <S.BoxInner $margin="0 auto">
          <Ing>⚠️준비중🚧</Ing>
          <p>컴포넌트, 기능, 스타일 Scss가이드, 스타일 컴포넌트등<br/>
            확인할 수 있는 곳</p>
        </S.BoxInner>
      </S.BoxWrap>
    </div>
  )
}


export default GuideTemplate;