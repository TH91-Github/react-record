import {React, useState,} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/styled/TitleBar";

function State3 () {
  
  const cssGap = "20px 0 0 0";
  return (
    <div className="study">
      <S.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
        <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
        <S.SnsList>
          <S.A 
            href="https://velog.io/@th_velog/React-state-useState-2" target="_blank" rel="noopener noreferrer">
            <S.Blind>Velog Url</S.Blind>
            <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
          </S.A>
        </S.SnsList>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <TitleBar>Button 증가/감소</TitleBar>
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
          <TitleBar>Input onChange</TitleBar>
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
          <TitleBar>입력한 값으로 변경</TitleBar>
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