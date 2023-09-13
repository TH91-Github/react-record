import {React, useState,} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

function State3 () {
  const cssGap = "20px 0 0 0";
  return (
    <div className="study">
      <S.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
        <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
        <div className="study__header">
          <S.SnsBoxText $lineHeight="20px">
            <S.A 
              href="https://velog.io/@th_velog/React-state-useState-2" target="_blank" rel="noopener noreferrer" $display="flex">
              <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
              <S.SnsText $margin="0 0 0 10px">👈 Velog 확인하기</S.SnsText>
            </S.A>
          </S.SnsBoxText>
          <TitleBar fontSize="24px">📌 React - state(3) Input, Button 값 변경 </TitleBar>
        </div>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>button count +-</SubTitleBar>
          <p className="desc">
            ...Spread Operator(스프레드 연산자)<br />
            사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.
          </p>
          <CodeTemplate text={"dd"}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>Input onChange</SubTitleBar>
          <p className="desc">
            ...Spread Operator(스프레드 연산자)<br />
            사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.
          </p>
          <CodeTemplate text={"dd"}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>입력한 값으로 변경</SubTitleBar>
          <p className="desc">
            ...Spread Operator(스프레드 연산자)<br />
            사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.
          </p>
          <CodeTemplate text={"dd"}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
          </div>
        </S.BoxLine>
      </S.BoxLine>
    </div>
  )
}

export default State3;