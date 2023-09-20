import {React, useState,} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

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
        <div className="study__header">
          <S.SnsBoxText $lineHeight="20px">
            <S.A 
              href="https://velog.io/@th_velog/React-state-useState-2" target="_blank" rel="noopener noreferrer" $display="flex">
              <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
              <S.SnsText $margin="0 0 0 10px">👈 Velog 확인하기</S.SnsText>
            </S.A>
          </S.SnsBoxText>
          <TitleBar fontSize="24px">📌 React - state (2) Array 변경</TitleBar>
        </div>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>성공버전</SubTitleBar>
          <p className="desc"> ...Spread Operator(스프레드 연산자)</p>
          <p className="desc">사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.</p>
          <CodeTemplate text={successCode1}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              <p>arr : {success}</p>
              <p>arr[0] : {success[0]}</p>
              <p>arr[1] : {success[1]}</p>
              <p>arr[2] : {success[2]}</p>
              <S.BtnWrap $margin="20px 0 0">
                <button type="button" className="button" onClick={successChange}>
                  변경 버튼
                </button>
                <button type="button" className="button" onClick={() => { setSuccess(baseData);}}>
                  초기화 버튼
                </button>
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>실패 버전-1</SubTitleBar>
          <p className="desc">
            변경은 가능하지만 수정하기 위해 불필요하게 입력을 해야한다.
          </p>
          <CodeTemplate text={code1}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              {
                arr1.map((item) =>
                  <p key={item}>{item}</p>
                )
              }
              <S.BtnWrap $margin="20px 0 0">
                <button type="button" className="button" onClick={arrChange1}>
                  변경 버튼
                </button>
                <button type="button" className="button" onClick={() => { setArr1(baseData);}}>
                  초기화 버튼
                </button>
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>실패 버전-2</SubTitleBar>
          <p className="desc">기존 배열은 다 사라지고 야호만 나오게 되며 변경 버튼 한번 더 클릭 시 에러</p>
          <p className="desc">⚠️ setArr()내에 저렇게 마음대로 변경을 하게 될 경우 값이 바뀌게 되니 하지 말아야 한다</p>
          <CodeTemplate text={code2}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              <p>{arr2[0]}</p>
              <p>{arr2[1]}</p>
              <p>{arr2[2]}</p>
              <S.BtnWrap $margin="20px 0 0">
                <button type="button" className="button" onClick={arrChange2}>
                  변경 버튼
                </button>
                <button type="button" className="button" onClick={() => { setArr2(baseData);}}>
                  초기화 버튼
                </button>
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
      </S.BoxLine>
    </div>
  )
}

export default State2;