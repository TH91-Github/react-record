import {React, useState,} from "react";

import { SvgVelog } from "../../../../styled/common/SvgPath";
// styled

import * as S from "../../../../styled/common/Common";
import Icon from "../../../../styled/common/Icon";
import TitleBar from "../../../../styled/TitleBar";

function State2 () {

  const baseData = ["배열1","배열2","배열3"];
  const [arr, setArr] = useState(baseData);

  function arrChange1() {
    const newArr = [...arr];
    newArr[0] = "해결";
    setArr(newArr)
  }

  return (
    <div className="study">
      <div className="sns-s">
        <S.A 
          href="https://velog.io/@th_velog/React-state-useState-2" target="_blank" rel="noopener noreferrer">
          <span className="blind">Velog Url</span>
          <Icon><SvgVelog color="#20C997"></SvgVelog></Icon>
        </S.A>
      </div>
      <div className="box">
        <div className="box-head">
          <TitleBar $padding="">성공버전</TitleBar>
          <p>
            ...Spread Operator(스프레드 연산자)<br />
            사용하여 복사 후 값 변경 후 👉 set변경함수() 사용.
          </p>
        </div>
        <div className="box-cont">
          <p>{arr}</p>
          <p>{arr[0]}</p>
          <p>{arr[1]}</p>
          <p>{arr[2]}</p>
        </div>
        <hr />
        <button type="button" onClick={arrChange1}>
          변경 버튼
        </button>
        <button type="button" onClick={() => { setArr(baseData);}}>
          초기화 버튼
        </button>
      </div>
    </div>
  )
}

export default State2;