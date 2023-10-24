import {React} from "react";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

function Js() {
  const cssGap = "20px 0 0 0";
  return (
    <div className="study">
      <S.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
        <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
        <div className="study__header">
          <TitleBar $fontSize="24px">📌 JavaScript 기록 공간 예정 </TitleBar>
        </div>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>📍 부제목</SubTitleBar>
          <p className="desc">설명글입니다.</p>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              아무것도 없습니다.
            </div>
          </div>
        </S.BoxLine>
      </S.BoxLine>
    </div>
  )
}

export default Js;