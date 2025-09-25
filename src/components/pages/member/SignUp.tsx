import { colors, textColor, textShadow } from "assets/style/variables";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "hooks/useToast";
import { userPushDataDoc } from "lib/firebase/auth";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { UserDataType } from "types/auth";
import { randomNum } from "utils/common";
import { auth } from "../../../firebase";
import { EmailForm } from "./EmailForm";
import { NickNameForm } from "./NickNameForm";
import { PasswordForm } from "./PasswordForm";
import { SimpleIDForm } from "./SimpleIDForm";
import { Loading } from "components/common/Loading";
import { Modal } from "components/common/Modal";

interface SignUpPropsType {
  authChange: () => void
}

interface InputStateType {
  id: string,
  check:boolean
}
export interface RefInputType {
  refPush: (tag:HTMLInputElement) => void;
  validationUpdate: (inputID:string, state:boolean) => void;
}

export const SignUp = ({authChange}:SignUpPropsType) =>{
  const { addToast } = useToast();
  const refList = useRef<HTMLInputElement[]>([]);
  const [alertMessage, setAlertMessage] = useState({
    isAlert:false,
    success:false,
    message:''
  })
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [validation, setValidation] = useState<InputStateType[]>([]);
  
  const handleChangeClick = () => { // 로그인 바로가기
    authChange();
  }

  // ref push - input
  const refListPush = useCallback((tag: HTMLInputElement) => {
    if (!refList.current.some(item => item === tag)) {
      refList.current.push(tag);
      const inputState: InputStateType = {
        id: tag.getAttribute('id') || '',
        check: essentialChk(tag)
      };
      setValidation(prev => [...prev, inputState]);
    }
  }, []);

  // 필수가 아닌 요소 true 반환
  const essentialChk = (checkTag: HTMLInputElement): boolean => {
    const essentialName = ['simpleID']; // 필수 아닌 요소 ID 입력
    const tagID = checkTag.getAttribute('id');
    return tagID && essentialName.includes(tagID) ? true : false;
  };

  // 각 input 유효성 검사 체크 업데이트: 통과-true, 실패-false
  const inputValidationUpdate = useCallback((inputID: string, state: boolean) => {
    setValidation(prev => {
      const updated = prev.map(item => {
        if (item.id !== inputID) return item;
        if (item.check === state) return item;
        return { ...item, check: state };
      });

      const isChanged = prev.some((item, i) => item.check !== updated[i].check);
      return isChanged ? updated : prev;
    });
  }, []);
  
  // alert message
  const messageCase = (messageCheck: string) => {
    const messages: { [key: string]: string } = {
      email: "이메일",
      simpleID: "간편 아이디",
      nickName: "닉네임",
      password: "비밀번호",
      passwordCheck: "비밀번호 재입력"
    };
    return messages[messageCheck] || "입력";
  };

  const handleSignup = useCallback(async () => {
    const resultData : UserDataType = {
      id:'',
      email: refList.current[0]?.value,
      simpleID:refList.current[1]?.value || '',
      nickName:refList.current[2]?.value,
      password:refList.current[3]?.value,
      signupTime:new Date().getTime().toString(),
      rank:'basic',
      theme:{
        color:'',
        mode:'light'
      },
      permission:false,
      profile:'-',
      uid: '',
    }
    try {
      // 계정 관리 Authentication 등록
      const userCredential = await createUserWithEmailAndPassword(auth, resultData.email, resultData.password);
      resultData.id = userCredential.user.uid;
      resultData.uid = userCredential.user.uid;
      resultData.password = randomNum(9999, "secret-login");
      await userPushDataDoc(resultData);
      // 완료 레이어 팝업 -> member 이동
      setAlertMessage({
        isAlert:true,
        success:true,
        message:'회원가입 완료 😁'
      })
    } catch (error) {
      setAlertMessage({
        isAlert:true,
        success:false,
        message:'회원 가입에 실패했어요🥲'
      })
    }
    setSignUpLoading(false);
  },[]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (signUpLoading) return; // 중복 실행 방지

    const hasChecked = validation.find(item => !item.check);
    if (hasChecked) {
      const message = messageCase(hasChecked.id);
      const focusInput = refList.current.find(refItem => refItem.getAttribute('id') === hasChecked.id);
      addToast(`${message}을 다시 확인해주세요.`, 'error');
      focusInput?.focus();
    } else {
      setSignUpLoading(true);
      handleSignup();
    }
  }, [validation, addToast, handleSignup, signUpLoading]);

  const handlePopupClick = () => {
    if(alertMessage.success){
      authChange();
    }
    setAlertMessage({
      isAlert:false,
      success:false,
      message:''
    })
  }
  return(
    <StyleWrap>
      <h2 className="title">회원가입</h2>
      <div className="form-wrap">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          {/* 이메일 */}
          <div className="form-item">
            <EmailForm 
              refPush={refListPush}
              validationUpdate={inputValidationUpdate}
            />
          </div>
          {/* 간편 아이디 */}
          <div className="form-item">
            <SimpleIDForm 
              refPush={refListPush}
              validationUpdate={inputValidationUpdate}
            />
          </div>
          {/* 닉네임 */}
          <div className="form-item">
            <NickNameForm 
              refPush={refListPush}
              validationUpdate={inputValidationUpdate}
            />
          </div>
          {/* 비밀번호  */}
          <div className="form-item">
            <PasswordForm 
              refPush={refListPush}
              validationUpdate={inputValidationUpdate}
            />
          </div>
          <div className="btn-article">
            <button type="submit" className="btn btn-submit full">
              <span>확인</span>
            </button>
          </div>
        </form>
      </div>
      <div className="auth-switch">
        <span>아이디가 있으신가요?</span>
        <button 
          className="auth-btn"
          onClick={handleChangeClick}
        >
          <span>로그인</span>
        </button>
        <span>바로 가기</span>
      </div>
      {
        signUpLoading && <Loading dimmed={true} mode="body"/>
      }
      {
        (alertMessage.isAlert)  && 
        <Modal onClose={handlePopupClick}>
          <ModalInner>
            <p className="tit">{alertMessage.message}</p>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePopupClick}
              >
                <span>확인</span>
              </button>
            </div>
          </ModalInner>          
        </Modal>
      }
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
.title{ 
  font-size:32px;
  text-align:center;
  text-shadow:${textShadow.base};
}
.form-wrap{
  position:relative;
  margin-top:20px;
  padding-top:20px;
  &::before{
    position:absolute;
    top:0;
    left:50%;
    width:50%;
    height:2px;
    border-radius:2px;
    background:${colors.blue};
    transform: translateX(-50%) scaleX(1);
    animation: formLineAni 1s .3s ease both;
    content:'';
  }
  @keyframes formLineAni {
    from{ transform: translateX(-50%) scaleX(0);}
    to { transform: translateX(-50%) scaleX(1); }
  }
}
.btn-article{
  margin-top:30px;
}
.btn-submit{
  border:1px solid ${colors.blue};
  &:hover, &:focus {
    background:${colors.blue};
    color:#fff;
  }
}
.auth-switch{
  display:flex;
  gap:5px;
  align-items:center;
  margin-top:20px;
  & > span {
    font-size:14px;
    color:${textColor.subText};
  }
  .auth-btn {
    position:relative;
    padding-bottom:3px;
    font-weight:500;
    color:${colors.mSlateBlue};
    &::after{
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      height:2px;
      background: ${colors.mSlateBlue};
      transition: transform var(--transition);
      transform: scaleX(0);
      transform-origin:left center;
      content:'';
    }
    &:hover, &:focus {
      &::after{
        transform: scaleX(1);
      }
    }
  }
}
`;

const ModalInner = styled.div`

`;