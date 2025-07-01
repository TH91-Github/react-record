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
  const [isErrorMessage, setIsErrorMessage] = useState('');
  const [duplicateSimpleID, setDuplicateSimpleID] = useRecoilState(stateDuplicateSimpleID);

  console.log('simpleID')

  const handleFocus = () => {
    setIsErrorMessage(''); // error 초기화
  }

  const disapproval = (message:string) => {
    setIsErrorMessage(message);
    validationUpdate(inputID, false);
  }

  const handleBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.trim();
    const isValLength = inputVal.length === 0 || (inputVal.length >= 4 && inputVal.length <= 20);
    const isEnNumeric = enNumberCheck(inputVal);
    const isInvalid = (inputVal.length === 0) || (isValLength && isEnNumeric);

    if (e.target.value.length > 0 && inputVal.length === 0) {
      disapproval('띄어쓰기 공백을 확인해주세요. 🤔')
      return;
    };
    
    if (!isInvalid) {
      disapproval('잘못된 아이디 형식입니다. 🤔')
      return;
    }
    if (duplicateSimpleID.includes(inputVal)) {
      setIsErrorMessage('이미 가입한 ID가 있어요.. 🥹');
      return;
    }
    if(inputVal.length >= 4){ // 중복 체크는 입력 값 있는 경우
       const isDuplicate = await checkIDDuplicate(inputVal, 'simpleID');
      if (isDuplicate) {
        setDuplicateSimpleID(prev =>
          prev.includes(inputVal) ? prev : [...prev, inputVal]
        );
        disapproval('이미 가입한 ID가 있어요.. 🥹');
        return;
      }
    }
    setIsErrorMessage('');
    validationUpdate(inputID, true);
  },[setIsErrorMessage, validationUpdate]);

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
        title="간편 아이디"
        barStyle={true}
        focusColor={colors.blue}
        focusEvent={handleFocus}
        blurEvent={handleBlur}
      />
      <div className="description">
        <p className="txt">
          {isErrorMessage ? isErrorMessage : '특수문자, 한글 제외, 4~20자의 영문 대/소문자 포함하여 사용해주세요.'}</p>
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