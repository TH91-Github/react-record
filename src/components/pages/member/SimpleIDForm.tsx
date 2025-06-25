import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useRef } from "react";
import styled from "styled-components";

// 🔹 간편 ID 유효성 체크 포함
export const SimpleIDForm = () => {
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
        id="signup-simple-id" 
        title="간편 아이디"
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