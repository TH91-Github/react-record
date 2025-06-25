import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useRef } from "react";
import styled from "styled-components";

// 🔹 email 유효성 체크 포함
export const PasswordForm1 = () => {
  const emailRef = useRef<InputItemModuleRefType>(null); 

  const handleFocus = () => {
    console.log('in')
  }
  const handleBlur = () => {
    console.log('out')
  }
  
  return (
    <StyleWrap className="form-item">
      <InputItemModule 
        ref={emailRef}
        id="signup-pw1" 
        title="비밀번호"
        type="password"
        essential={true}
        barStyle={true}
        focusColor={colors.blue}
        focusEvent={handleFocus}
        blurEvent={handleBlur}
      />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
`;