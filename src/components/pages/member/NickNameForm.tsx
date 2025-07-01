import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RefInputType } from "./SignUp";
import { specialCharactersSpacesCheck } from "utils/regex";
import { cn } from "utils/common";

// 🔹 닉네임 유효성 체크 포함
const inputID = 'nickName';
export const NickNameForm = ({ refPush, validationUpdate }:RefInputType) => {
  const inputRef = useRef<InputItemModuleRefType>(null); 
  const [isErrorMessage, setIsErrorMessage] = useState('');

  const handleFocus = () => {
    setIsErrorMessage(''); // error 초기화
  }

  const disapproval = (message:string) => {
    setIsErrorMessage(message);
    validationUpdate(inputID, false);
  }

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.trim();
    if (e.target.value.length > 0 && inputVal.length === 0) {
      disapproval('띄어쓰기 공백을 확인해주세요. 🤔')
      return;
    };
    if(inputVal.length === 0) return 
    
    if(inputVal.length > 10 || specialCharactersSpacesCheck(inputVal)){
      disapproval('입력을 다시 확인해주세요..! 🤔')
      return
    }
    setIsErrorMessage('');
    validationUpdate(inputID, true);
  },[setIsErrorMessage, validationUpdate])

  // input - ref
  useEffect(() => {
    if (inputRef.current && refPush) {
      const inputElement = inputRef.current.refModuleEl();
      inputElement && refPush(inputElement);
    }
  }, [inputRef, refPush]);
  
  return (
    <StyleWrap className={cn('form-item', isErrorMessage && 'error')}>
      <InputItemModule 
        ref={inputRef}
        id={inputID}
        title="닉네임"
        essential={true}
        barStyle={true}
        focusColor={colors.blue}
        focusEvent={handleFocus}
        blurEvent={handleBlur}
      />
      <div className="description">
        <p className="txt">
          {isErrorMessage ? isErrorMessage : '1~10자 이내로 입력해주세요. (띄어쓰기, 특수기호 제외)'}</p>
      </div>
    </StyleWrap>
    
  )
}
const StyleWrap = styled.div`
  .description {
      margin-top:5px;
      padding-left:10px;
      .txt {
        font-size:14px;
        font-weight:400;
        color:${textColor.subText};
      }
    }
    &.error{ 
      .description{
        .txt{
          color: ${colors.red};
        }
      }
    }
      
`;
