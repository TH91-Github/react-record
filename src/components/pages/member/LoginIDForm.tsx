import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useEffect, useRef } from "react";
import styled from "styled-components";

// 🔹 로그인 ID 유효성 폼
const inputID = 'loginID';
export const LoginIDForm = () => {
  const inputRef = useRef<InputItemModuleRefType>(null);

  const handleFocus = () => {
    console.log('in')
  }
  const handleBlur = () => {
    console.log('out')
  }

  useEffect(()=>{


  },[]);
  
  return (
    <StyleWrap className="form-item">
      <InputItemModule 
        ref={inputRef}
        id={inputID} 
        title="아이디 or 이메일"
        focusColor={colors.blue}
        focusEvent={handleFocus}
        blurEvent={handleBlur}
      />
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
`;