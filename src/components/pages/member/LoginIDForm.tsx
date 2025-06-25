import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useRef } from "react";
import styled from "styled-components";

// 🔹 로그인 ID 유효성 폼
export const LoginIDForm = () => {
  const loginIDRef = useRef<InputItemModuleRefType>(null); 

  const handleFocus = () => {
    console.log('in')
  }
  const handleBlur = () => {
    console.log('out')
  }

  return (
    <StyleWrap className="form-item">
      <InputItemModule 
        ref={loginIDRef}
        id="login-id" 
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