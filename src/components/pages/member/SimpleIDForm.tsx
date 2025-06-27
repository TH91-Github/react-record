import { colors } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { useRef } from "react";
import styled from "styled-components";
import { RefInputType } from "./SignUp";

// 🔹 간편 ID 유효성 체크 포함
export const SimpleIDForm = ({ refPush, validationUpdate }:RefInputType) => {
  const intRef = useRef<InputItemModuleRefType>(null); 

  console.log('simpleID')
  const handleFocus = () => {
    console.log('in')
  }
  const handleBlur = () => {
    console.log('out')
  }

  return (
    <StyleWrap className="form-item">
      <InputItemModule 
        ref={intRef}
        id="signupID" 
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