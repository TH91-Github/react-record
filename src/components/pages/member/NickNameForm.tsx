import { colors, textColor } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule"
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RefInputType } from "./SignUp";
import { spacesCheck, hasSpecialCharacters } from "utils/regex";
import { cn } from "utils/common";

// 🔹 닉네임 유효성 체크 포함
const inputID = 'nickName';
export const NickNameForm = ({ refPush, validationUpdate }:RefInputType) => {
  const inputRef = useRef<InputItemModuleRefType>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const disapproval = useCallback((message: string, isValid = false) => {
    setErrorMessage(message);
    validationUpdate(inputID, isValid);
  }, [validationUpdate]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const val = rawVal.trim();

    if ((rawVal.length > 0 && val.length === 0) || spacesCheck(val)) {
      disapproval('띄어쓰기 공백을 확인해주세요. 🤔');
      return;
    }

    if (val.length === 0) return;

    if (val.length > 10 || hasSpecialCharacters(val)) {
      disapproval('입력을 다시 확인해주세요..! 🤔');
      return;
    }

    disapproval('', true);
  }, [disapproval]);

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
        title="닉네임"
        essential={true}
        barStyle={true}
        focusColor={colors.blue}
        focusEvent={() => disapproval('')}
        blurEvent={handleBlur}
      />
      <div className="description">
        <p className="txt">
          {errorMessage || '1~10자 이내로 입력해주세요. (띄어쓰기, 특수기호 제외)'}
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
