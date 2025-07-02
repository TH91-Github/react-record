import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { stateDuplicateSimpleID } from "recoil/userAtoms";
import styled from "styled-components";
import { RefInputType } from "./SignUp";
import { enNumberCheck } from "utils/regex";
import { cn } from "utils/common";
import { checkIDDuplicate } from "lib/firebase/auth";

// 🔹 간편 ID 유효성 체크 포함
const inputID = 'simpleID';
export const SimpleIDForm = ({ refPush, validationUpdate }:RefInputType) => {
  const inputRef = useRef<InputItemModuleRefType>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [duplicateSimpleID, setDuplicateSimpleID] = useRecoilState(stateDuplicateSimpleID);

  const disapproval = useCallback((message: string, isValid: boolean) => {
    setErrorMessage(message);
    validationUpdate(inputID, isValid);
  }, [validationUpdate]);

  const handleBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const val = rawVal.trim();

    if (rawVal.length > 0 && val.length === 0) {
      disapproval('띄어쓰기 공백을 확인해주세요. 🤔', false);
      return;
    }

    // ✅ 값이 비어 있는 경우 → 유효한 상태로 처리
    if (val.length === 0) {
      disapproval('', true);
      return;
    }

    const isValidLength = val.length >= 4 && val.length <= 20;
    const isValidFormat = enNumberCheck(val);

    if (!isValidLength || !isValidFormat) {
      disapproval('잘못된 아이디 형식입니다. 🤔', false);
      return;
    }

    if (duplicateSimpleID.includes(val)) {
      disapproval('이미 가입한 ID가 있어요.. 🥹', false);
      return;
    }

    const isDuplicate = await checkIDDuplicate(val, 'simpleID');
    if (isDuplicate) {
      setDuplicateSimpleID(prev => prev.includes(val) ? prev : [...prev, val]);
      disapproval ('이미 가입한 ID가 있어요.. 🥹', false);
      return;
    }

    disapproval('', true);
  }, [ disapproval, duplicateSimpleID, setDuplicateSimpleID ]);

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
        title="간편 아이디"
        barStyle
        focusColor={colors.blue}
        focusEvent={() => disapproval('', true)}
        blurEvent={handleBlur}
      />
      <div className="description">
        <p className="txt">
          {errorMessage || '특수문자, 한글 제외, 4~20자의 영문 대/소문자 포함하여 사용해주세요.'}
        </p>
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