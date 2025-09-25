import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { getUserColDoc } from "lib/firebase/auth";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { cn } from "utils/common";
import { RefInputType } from "./SignUp";
import { domainChkMessage, isInvalidEmail } from "utils/auth";

// 🔹 email 유효성 체크 포함
const inputID = 'email';
export const EmailForm = ({ refPush, validationUpdate }:RefInputType) => {
  const inputRef = useRef<InputItemModuleRefType>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [duplicateID, setDuplicateID] = useState<string[]>([]); 

  const disapproval = useCallback((message: string, isValid = false) => {
    setErrorMessage(message);
    validationUpdate(inputID, isValid);
  }, [validationUpdate]);

  const handleBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const val = rawVal.trim();

    if (rawVal.length > 0 && val.length === 0) {
      disapproval('띄어쓰기 공백을 확인해주세요. 🤔');
      return;
    }

    if (val.length === 0) return;

    if (isInvalidEmail(val)) {
      disapproval('유효하지 않은 이메일 형식이에요. 🤔');
      return;
    }

    // 유효 도메인 체크
    const domainMsg = domainChkMessage(val);
    if (domainMsg) {
      disapproval(domainMsg);
      return;
    }

    // 1회 체크 이후 동일 이메일 체크 시 
    if (duplicateID.includes(val)) { 
      disapproval('이미 가입한 이메일이에요. 🥹');
      return;
    }
    // 최초 1회 db 체크
    const isDuplicate = await getUserColDoc('emails', val);
    if (isDuplicate) {
      setDuplicateID(prev => prev.includes(val) ? prev : [...prev, val]);
      disapproval('이미 가입한 이메일이에요. 🥹');
      return;
    }

    disapproval ('', true);
  }, [ disapproval, domainChkMessage, duplicateID, setDuplicateID ]);

  // input - ref
  useEffect(() => {
    if (inputRef.current && refPush) {
      const el = inputRef.current.refModuleEl();
      el && refPush(el);
    }
  }, [refPush]);

  return (
    <StyleWrap className={cn('form-item', errorMessage && 'error')}>
      <InputItemModule
        ref={inputRef}
        id={inputID}
        title="이메일"
        essential
        barStyle
        isError={!!errorMessage}
        focusColor={colors.blue}
        focusEvent={() => disapproval('')}
        blurEvent={handleBlur}
      />
      <div className="description">
        <p className="txt">
          {errorMessage || '한글을 포함할 수 없으며, @ 포함되어야 합니다.'}
        </p>
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