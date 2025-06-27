import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { checkEmailDuplicate } from "lib/firebase/auth";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { stateDuplicateEmail } from "recoil/userAtoms";
import styled from "styled-components";
import { cn } from "utils/common";
import { isInvalidEmail } from "utils/regex";
import { RefInputType } from "./SignUp";

// 🔹 email 유효성 체크 포함
const inputID = 'signupEmail';
export const EmailForm = ({ refPush, validationUpdate }:RefInputType) => {
  const intRef = useRef<InputItemModuleRefType>(null); 
  const [isErrorMessage, setIsErrorMessage] = useState('');
  const [duplicateEmail, setDuplicateEmail] = useRecoilState(stateDuplicateEmail);
  
  console.log('email component')
  // 도메인 체크 
  const domainChkMessage = useCallback((emailValue:string) => {
    const validDomains = ['naver.com', 'nate.com', 'daum.net'];
    const domain = emailValue.split('@')[1] ?? '';

    if (domain === 'gmail.com') {
      return '구글 로그인으로 가능해요! 😁';
    }
    if (domain && !validDomains.includes(domain)) {
      const emailList = validDomains.join(', ');
      return `${emailList} 👈 이메일을 이용해주세요.. 😅`;
    }
    return '';
  },[]);

  // focus IN - error 초기화, validationUpdate 필수 요건 false
  const handleFocus = () => {
    setIsErrorMessage(''); // error 초기화
  }
  const disapproval = (message:string) => {
    setIsErrorMessage(message);
    validationUpdate(inputID, false);
  }

  const handleBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
    const emailVal = e.target.value.trim();
    if (emailVal.length === 0) return;

    const isInvalid = isInvalidEmail(emailVal);
    const isEmailExists = domainChkMessage(emailVal);
    if (isInvalid) {
      disapproval('유효하지 않은 이메일 형식이에요. 🤔')
      return;
    }
    if (isEmailExists.length > 0) {
      disapproval(isEmailExists)
      return;
    }
    if (duplicateEmail.includes(emailVal)) {
      setIsErrorMessage('이미 가입한 이메일이에요. 🥹');
      return;
    }
    const isDuplicate = await checkEmailDuplicate(emailVal);
    if (isDuplicate) {
      setDuplicateEmail(prev =>
        prev.includes(emailVal) ? prev : [...prev, emailVal]
      );
      disapproval('이미 가입한 이메일이에요. 🥹');
      return;
    }

    setIsErrorMessage('');
    validationUpdate(inputID, true);
    console.log('아이디 만드셈');
  }, [domainChkMessage, duplicateEmail, setDuplicateEmail, validationUpdate]);

   // input - ref
  useEffect(() => {
    if (intRef.current && refPush) {
      const inputElement = intRef.current.refModuleEl();
      inputElement && refPush(inputElement);
    }
  }, [intRef, refPush]);

  return (
    <StyleWrap className={cn('form-item', isErrorMessage && 'error')}>
      <InputItemModule 
        ref={intRef}
        id={inputID} 
        title="이메일"
        essential={true}
        barStyle={true}
        isError={isErrorMessage ? true : false}
        focusColor={colors.blue}
        focusEvent={handleFocus}
        blurEvent={handleBlur}
      />
      <div className="description">
        <p className="txt">
          {isErrorMessage ? isErrorMessage : '한글을 포함할 수 없으며, @ 포함되어야 합니다.'}</p>
      </div>
    </StyleWrap>
  )
};

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