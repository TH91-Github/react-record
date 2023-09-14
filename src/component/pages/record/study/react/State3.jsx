import {React, useState,} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

function State3 () {
  // 1
  const [count, setCount] = useState(0);
  const code1 = `   const [count, setCount] = useState(0);`;
  // 2
  const [arr, setArr] = useState(["배열1","배열2","배열3"]);
  const arrChange = () => {
    const newArr = [...arr];
    // newArr[0] = "변경글자";
    newArr.push("추가" + newArr.length);
    setArr(newArr)
  }
  const code2 = `  const [arr, setArr] = useState(["배열1","배열2","배열3"]);
  const arrChange = () => { // button onClick
    const newArr = [...arr];
    // newArr[0] = "변경글자";
    newArr.push("추가" + newArr.length);
    setArr(newArr)
  }`;
  // 3
  const [inputVal, setInputVal] = useState('');
  const inputChange = (e) => {
    setInputVal(e.target.value);
  }
  const code3 = `  const [inputVal, setInputVal] = useState('');
  const inputChange = (e) => { // input onChange
    setInputVal(e.target.value);
  }`;
  // 4
  const [changeVal, setChangeVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  const inputChange2 = (e) => {
    setInputVal2(e.target.value);
  }
  const textChange = () => {
    setChangeVal(inputVal2);
    setInputVal2(''); // 초기화
  }
  const code4 = `  const [changeVal, setChangeVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  const inputChange2 = (e) => { // input onChange
    setInputVal2(e.target.value);
  }
  const textChange = () => { // button onClick
    setChangeVal(inputVal2);
    setInputVal2(''); // 초기화
  }`;

  const cssGap = "20px 0 0 0";
  return (
    <div className="study">
      <S.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
        <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
        <div className="study__header">
          <S.SnsBoxText $lineHeight="20px">
            <S.A 
              href="https://velog.io/@th_velog/React-state3-Input-Button-값-변경" target="_blank" rel="noopener noreferrer" $display="flex">
              <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
              <S.SnsText $margin="0 0 0 10px">👈 Velog 확인하기</S.SnsText>
            </S.A>
          </S.SnsBoxText>
          <TitleBar fontSize="24px">📌 React - state(3) input 입력된 값으로 변경 </TitleBar>
        </div>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>📍 button array 값 변경</SubTitleBar>
          <p className="desc">button count +-</p>
          <CodeTemplate text={code1}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              <p>{count}</p>
              <S.BtnWrap $margin="20px 0 0">
                <button type="button" className="button" onClick={() => setCount(count+1)}>
                  증가
                </button>
                <button type="button" className="button" onClick={() => setCount(count-1)}>
                  감소
                </button>
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>📍 button array 값 변경</SubTitleBar>
          <p className="desc">
            Button 클릭 시 Array 값이 추가
          </p>
          <CodeTemplate text={code2}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              <p>{arr}</p>
              <S.BtnWrap $margin="20px 0 0">
                <button type="button" className="button" onClick={arrChange}>배열 변경</button>
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>📍 input onChange 값 변경</SubTitleBar>
          <p className="desc">
            input onChange 변경 시 e.target.value 값을 변경함수에 전달.
          </p>
          <CodeTemplate text={code3}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              <p>{inputVal}</p>
              <S.BtnWrap $margin="20px 0 0">
                <input type="text" onChange={(e) => inputChange(e)} />
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>📍 input + button 값 변경</SubTitleBar>
          <p className="desc">
            ...Spread Operator(스프레드 연산자)<br />
            사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.
          </p>
          <CodeTemplate text={code4}/>
          <div className="box__cont">
            <p className="box__cont-tit">[👇실행화면👇]</p>
            <div className="box__result">
              <p>{changeVal}</p>
              <S.BtnWrap $margin="20px 0 0">
                <input type="text" value={inputVal2} onChange={(e)=>inputChange2(e)}/>
                <button type="button" className="button" onClick={textChange}>입력 값으로 변경</button>
              </S.BtnWrap>
            </div>
          </div>
        </S.BoxLine>
      </S.BoxLine>
    </div>
  )
}

export default State3;