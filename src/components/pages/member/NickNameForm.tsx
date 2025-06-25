import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useRef } from "react";
import styled from "styled-components";

// 🔹 닉네임 유효성 체크 포함
export const NickNameForm = () => {
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
        id="signup-nickname" 
        title="닉네임"
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
