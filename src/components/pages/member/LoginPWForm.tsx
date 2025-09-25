import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useRef } from "react";
import styled from "styled-components";

// 🔹 로그인 비밀번호 유혀성 포함
export const LoginPWForm = () => {
  const loginPWRef = useRef<InputItemModuleRefType>(null); 

  const handleFocus = () => {
    console.log('in')
  }
  const handleBlur = () => {
    console.log('out')
  }

  return (
    <div className="form-item">
      <InputItemModule 
        ref={loginPWRef}
        id="login-pw" 
        type="password"
        title="비밀번호"
        focusColor={colors.blue}
        focusEvent={handleFocus}
        blurEvent={handleBlur}
      />
  </div>
  )
}
