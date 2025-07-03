import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { validIDPW } from "utils/auth";
import { cn } from "utils/common";
import { RefInputType } from "./SignUp";

// 🔹 간편 ID 유효성 체크 포함
const inputID1 = 'password';
const inputID2 = 'passwordCheck';
export const PasswordForm = ({ refPush, validationUpdate }:RefInputType) => {
  const inputRef1 = useRef<InputItemModuleRefType>(null);
  const inputRef2 = useRef<InputItemModuleRefType>(null);

  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({
    [inputID1]: '',
    [inputID2]: '',
  });

  const disapproval = useCallback((inputID: string, message: string, isValid = false) => {
    setErrorMessages(prev => ({ ...prev, [inputID]: message }));
    validationUpdate(inputID, isValid);
  }, [validationUpdate]);

  // 비밀번호
  const handleBlurPw1 = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) return;

    const validationMsg = validIDPW(val,'PW');
    if (validationMsg) {
      disapproval(inputID1, validationMsg);
      return;
    }

    const confirmVal = inputRef2.current?.refModuleValue() || '';
    if (confirmVal && val !== confirmVal) {
      disapproval(inputID2, '비밀번호가 일치하지 않아요...❌');
    } else {
      disapproval(inputID2, '');
    }

    disapproval(inputID1, '', true);
  }, [disapproval]);

  // 비밀번호 확인
  const handleBlurPw2 = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) return;

    const validationMsg = validIDPW(val,'PW');;
    if (validationMsg) {
      disapproval(inputID2, validationMsg);
      return;
    }

    const pwVal = inputRef1.current?.refModuleValue() || '';
    if (pwVal !== val) {
      disapproval(inputID2, '비밀번호가 일치하지 않아요...❌');
      return;
    }

    disapproval(inputID2, '', true);
  }, [disapproval]);

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
      <div className={cn('form-item', errorMessages[inputID1] && 'error')}>
        <InputItemModule
          ref={inputRef1}
          id={inputID1}
          title="비밀번호"
          type="password"
          essential
          barStyle
          focusColor={colors.blue}
          focusEvent={() => disapproval(inputID1, '')}
          blurEvent={handleBlurPw1}
        />
        <div className="description">
          <p className="txt">
            {errorMessages[inputID1] || '6~20자의 영문 대/소문자, 숫자, 특수문자(띄어쓰기 제외)를 사용해주세요.'}</p>
        </div>
      </div>
       <div className={cn('form-item', errorMessages[inputID2] && 'error')}>
        <InputItemModule 
          ref={inputRef2}
          id={inputID2} 
          title="비밀번호 확인"
          type="password"
          essential={true}
          barStyle={true}
          focusColor={colors.blue}
          focusEvent={() => disapproval(inputID2, '')}
          blurEvent={handleBlurPw2}
        />
        <div className="description">
          <p className="txt">
            {errorMessages[inputID2] || '비밀번호를 다시 입력해주세요.'}
          </p>
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