import React, { useState } from "react";

function Js () {
  const [count, setCount] = useState(0);
  
  const [arr, setArr] = useState(["배열1","배열2","배열3"]);
  const arrChange = () => {
    const newArr = [...arr];
    // newArr[0] = "변경글자";
    newArr.push("추가" + newArr.length);
    setArr(newArr)
  }

  const [inputVal, setInputVal] = useState('');
  const inputChange = (e) => {
    console.log(e)
    setInputVal(e.target.value);
  }

  const [changeVal, setChangeVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  const inputChange2 = (e) => {
    setInputVal2(e.target.value);
  }
  const textChange = () => {
    setChangeVal(inputVal2);
    setInputVal2(''); // 초기화
  }

  return (
    <div className="velog">
      <div className="velog__box">
        <p className="velog__box-title">🎈 Count + - </p>
        <div className="velog__box__result">
          <p>{count}</p>
          <div className="velog__flex">
            <button type="button" onClick={() => setCount(count+1)}>증가</button>
            <button type="button" onClick={() => setCount(count-1)}>감소</button>
          </div>
        </div>
      </div>
      <div className="velog__box">
        <p className="velog__box-title">🎈 Arr 변경 </p>
        <div className="velog__box__result">
          <p>{arr}</p>
          <div className="velog__flex">
            <button type="button" onClick={arrChange}>배열 변경</button>
          </div>
        </div>
      </div>
      <div className="velog__box">
        <p className="velog__box-title">🎈 Input 값 변경 </p>
        <div className="velog__box__result">
          <p>{inputVal}</p>
          <div className="velog__flex">
            <input type="text" onChange={(e) => inputChange(e)} />
          </div>
        </div>
      </div>
      <div className="velog__box">
        <p className="velog__box-title">🎈 input + button 값 변경 </p>
        <div className="velog__box__result">
          <p>{changeVal}</p>
          <div className="velog__flex">
            <input type="text" value={inputVal2} onChange={(e)=>inputChange2(e)}/>
            <button type="button" onClick={textChange}>입력 값으로 변경</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Js;