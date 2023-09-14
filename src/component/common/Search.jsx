import React, { useState } from 'react';
import * as S from "component/styled/common/AllStyled";

function Search({placeholder, btnText}){
  const [val, SetVal] = useState('');
  const inputChange = (e) => {
    SetVal(e.target.value)
  }
  const buttonClick = () => {
    console.log(val)
    SetVal(''); // 초기화
  }
  return (
    <>
      <S.Input value={val} 
        onChange={(e)=>inputChange(e)} 
        placeholder={placeholder !== undefined ? placeholder : "입력해주세요"} />
      <S.ButtonB type="button" onClick={buttonClick}>
        <span>
          {btnText !== undefined ? btnText : "검색"}
        </span>
      </S.ButtonB>
    </>
  )
}
export default Search;