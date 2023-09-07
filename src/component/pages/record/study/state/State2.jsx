import {React, useState,} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/styled/TitleBar";

function State2 () {
  const baseData = ["배열1","배열2","배열3"];
  const [success, setSuccess] = useState(baseData);
  function successChange() {
    const newArr = [...success];
    newArr[0] = "해결";
    setSuccess(newArr)
  }
  const successCode1 =`  const [success, setSuccess] = useState(baseData);
  function successChange() {
    const newArr = [...success];
    newArr[0] = "해결";
    setSuccess(newArr)
  }`;

  // 실패 유형 테스트
  // 1
  const [arr1, setArr1] = useState(baseData);
  function arrChange1() {
    setArr1(["야호","야호1","변경 완료"])
  }
  const code1 =`  const [arr1, setArr1] = useState(baseData);
  function arrChange1() {
    setArr1(["야호","야호1","변경 완료"])
  }`;

  // 2
  const [arr2, setArr2] = useState(baseData);
  function arrChange2() {
    setArr2(arr2[0]="야호");
  }
  const code2 =`  const [arr2, setArr2] = useState(baseData);
  function arrChange2() {
    setArr2(arr2[0]="야호");
  }`;
  
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
          <TitleBar>성공버전</TitleBar>
          <p className="desc">
            ...Spread Operator(스프레드 연산자)<br />
            사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.
          </p>
          <CodeTemplate text={successCode1}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <p>arr : {success}</p>
            <p>arr[0] : {success[0]}</p>
            <p>arr[1] : {success[1]}</p>
            <p>arr[2] : {success[2]}</p>
          </div>
          <S.BtnWrap $margin="20px 0 0">
            <button type="button" onClick={successChange}>
              변경 버튼
            </button>
            <button type="button" onClick={() => { setSuccess(baseData);}}>
              초기화 버튼
          </button>
          </S.BtnWrap>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <TitleBar>실패 버전-1</TitleBar>
          <p className="desc">
            변경은 가능하지만 수정하기 위해 불필요하게 입력을 해야한다.
          </p>
          <CodeTemplate text={code1}/>
          <div className="box__cont">
          <p className="box__cont-tit">[👇실행화면👇]</p>
            {
              arr1.map((item) =>
                <p key={item}>{item}</p>
              )
            }
          </div>
          <S.BtnWrap $margin="20px 0 0">
            <button type="button" onClick={arrChange1}>
              변경 버튼
            </button>
            <button type="button" onClick={() => { setArr1(baseData);}}>
              초기화 버튼
          </button>
          </S.BtnWrap>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <TitleBar>실패 버전-2</TitleBar>
          <p className="desc">
            변경은 가능하지만 수정하기 위해 불필요하게 입력을 해야한다.
          </p>
          <CodeTemplate text={code2}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <p>{arr2[0]}</p>
            <p>{arr2[1]}</p>
            <p>{arr2[2]}</p>
          </div>
          <S.BtnWrap $margin="20px 0 0">
            <button type="button" onClick={arrChange2}>
              변경 버튼
            </button>
            <button type="button" onClick={() => { setArr2(baseData);}}>
              초기화 버튼
          </button>
          </S.BtnWrap>
        </S.BoxLine>
      </S.BoxLine>
    </div>
  )
}

export default State2;