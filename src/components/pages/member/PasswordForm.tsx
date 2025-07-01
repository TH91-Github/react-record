import styled from "styled-components"
import { RefInputType } from "./SignUp";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { colors, textColor } from "assets/style/variables";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "utils/common";
import { spacesCheck, specialCharactersSpacesCheck } from "utils/regex";

// 🔹 간편 ID 유효성 체크 포함
const inputID1 = 'pwID1';
const inputID2 = 'pwID2';
export const PasswordForm = ({ refPush, validationUpdate }:RefInputType) => {
  const inputRef1 = useRef<InputItemModuleRefType>(null); 
  const inputRef2 = useRef<InputItemModuleRefType>(null); 
  const [isErrorMessage, setIsErrorMessage] = useState({
    pwID1:'',
    pwID2:''
  });

  // 비밀번호
  const handleFocusPW = (inputID:string) => {
    disapproval(inputID,'')
  }

  const disapproval = (inputID:string, message:string) => {
    setIsErrorMessage(prev => (
      {...prev,  [inputID]: message}
    ));
    validationUpdate(inputID, false);
  }

  // 비밀번호
  const handleBlurPw1 = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;

    if(inputVal.length ===0){ 
      return 
    }
    if(inputVal.length < 6 || inputVal.length > 20){ // 6~20자
      disapproval(inputID1, '6~20자로 입력해주세요..!')
      return
    }
    if(specialCharactersSpacesCheck(inputVal) || spacesCheck(inputVal)){ // 특수문자 체크 && 띄어쓰기
      disapproval(inputID1, '비밀번호를 다시 확인해주세요 😯')
      return
    }

    const inputVal2 = inputRef2.current?.refModuleValue() || '';
    if(inputVal2.length > 0 && inputVal !== inputVal2){
      
      
    }
    disapproval(inputID1,'')
    validationUpdate(inputID1, true);
  },[])

  // 비밀번호 확인
  const handleBlurPw2 = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const inputVal2 = e.target.value
    if (e.target.value.length > 0 && inputVal2.length === 0) {
      disapproval(inputID2, '띄어쓰기 공백을 확인해주세요. 🤔')
      return;
    };
    if(inputVal2.length === 0) return 

    if(inputVal2.length < 6 || inputVal2.length > 20){
      disapproval(inputID2, '6~20자로 입력해주세요..!')
      return
    }
    
    const inputVal1 = inputRef1.current?.refModuleValue() || '';
    if((inputVal1 !== inputVal2) || (inputVal1.length !== inputVal2.length)){
      disapproval(inputID2, '비밀번호가 일치하지 않아요...❌');
      return
    }
    disapproval(inputID2, '');
    validationUpdate(inputID2, true);
  },[])

  useEffect(() => {
    if (inputRef1.current && inputRef2.current && refPush) {
      const inputElement1 = inputRef1.current.refModuleEl();
      const inputElement2 = inputRef2.current.refModuleEl();
      inputElement1 && refPush(inputElement1);
      inputElement2 && refPush(inputElement2);
    }
  }, [inputRef1, refPush]);
  
  return (
    <StyleWrap >
      <div className={cn('form-item', isErrorMessage.pwID1 && 'error')}>
        <InputItemModule 
          ref={inputRef1}
          id={inputID1} 
          title="비밀번호"
          type="password"
          essential={true}
          barStyle={true}
          focusColor={colors.blue}
          focusEvent={() => handleFocusPW(inputID1)}
          blurEvent={handleBlurPw1}
        />
        <div className="description">
          <p className="txt">
            {isErrorMessage.pwID1 ? isErrorMessage.pwID1 : '6~20자의 영문 대/소문자, 숫자, 특수문자(띄어쓰기 제외)를 사용해주세요.'}</p>
        </div>
      </div>
      <div className={cn('form-item', isErrorMessage.pwID2 && 'error')}>
        <InputItemModule 
          ref={inputRef2}
          id={inputID2} 
          title="비밀번호 확인"
          type="password"
          essential={true}
          barStyle={true}
          focusColor={colors.blue}
          focusEvent={() => handleFocusPW(inputID2)}
          blurEvent={handleBlurPw2}
        />
        <div className="description">
          <p className="txt">
            {isErrorMessage.pwID2 ? isErrorMessage.pwID2 : '비밀번호를 다시 입력해주세요.'}</p>
        </div>
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
  .form-item.error{ 
    .description{
      .txt{
        color: ${colors.red};
      }
    }
  }
`;