import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useEffect, useRef } from "react";
import styled from "styled-components";

// 🔹 email 유효성 체크 포함
interface PasswordFormPropsType { 
  inputUpdate: (el:HTMLInputElement) => void; // input El 부모에게 전달
  validationUpdate: (check:string, valid:boolean) => void; // 유효성 완료 전달
}
export const PasswordForm2 = ({
  inputUpdate, validationUpdate 
}:PasswordFormPropsType) => {
  const emailRef = useRef<InputItemModuleRefType>(null); 

  const handleFocus = () => {
    console.log('in')
  }
  const handleBlur = () => {
    console.log('out')
  }
  
  // input - ref
  useEffect(() => {
    if (emailRef.current && emailRef) {
      const inputElement = emailRef.current.refModuleEl();
      inputElement && inputUpdate(inputElement);
    }
  }, [emailRef, inputUpdate]);
  return (
    <StyleWrap className="form-item">
      <InputItemModule 
        ref={emailRef}
        id="signup-pw2" 
        title="비밀번호 확인"
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
