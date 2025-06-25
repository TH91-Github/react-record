import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { checkEmailDuplicate } from "lib/firebase/auth";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { cn } from "utils/common";
import { isValidEmail } from "utils/regex";

// 🔹 email 유효성 체크 포함
interface EmailFormPropsType { 
  inputUpdate: (el:HTMLInputElement) => void;
  validationUpdate: () => void;
}
export const EmailForm = ({
  inputUpdate,
  validationUpdate
}:EmailFormPropsType) => {
  const emailRef = useRef<InputItemModuleRefType>(null); 
  const [isErrorMessage, setIsErrorMessage] = useState('');
  
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

  const handleFocus = () => {
    console.log('in')
    validationUpdate();
    setIsErrorMessage(''); // 초기화
  }
  const handleBlur = useCallback(async(e: React.ChangeEvent<HTMLInputElement>)=> {
    if(!emailRef.current) return
    const emailVal = e.target.value.trim();

    // 유효성 검사
    if (emailVal.length === 0) return;
    const isValid = isValidEmail(emailVal);
    const isEmailExists = domainChkMessage(emailVal);

    if(isValid){
      // 이메일 유효성 체크
      setIsErrorMessage('유효하지 않은 이메일 형식이에요. 🤔')
    }else if(isEmailExists.length > 0){
      // 이메일 허용 주소 체크 
      setIsErrorMessage(isEmailExists)
    }else {
      // 중복 검사
      const isDuplicate = await checkEmailDuplicate(emailVal);
      if(isDuplicate){
        setIsErrorMessage('이미 가입한 이메일이에요. 🥹')
      }else{
        console.log('아이디 만드셈')
      }
    }
  },[]);

  return (
    <StyleWrap className={cn('form-item', isErrorMessage && 'error')}>
      <InputItemModule 
        ref={emailRef}
        id="signup-email" 
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