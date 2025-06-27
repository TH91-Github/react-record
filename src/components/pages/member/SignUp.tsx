import { colors, textColor, textShadow } from "assets/style/variables";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { EmailForm } from "./EmailForm";
import { SimpleIDForm } from "./SimpleIDForm";
import { randomIdChk, randomNum } from "utils/common";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserDataType } from "types/auth";

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
  const refList = useRef<HTMLInputElement[]>([]);
  const [validation, setValidation] = useState<InputStateType[]>([])
  
  const handleChangeClick = () => { // 로그인 바로가기.
    authChange();
  }

  // ref push - input
  const refListCheck = useCallback((tag: HTMLInputElement) => {
    if (!refList.current.some(item => item === tag)) {
      refList.current.push(tag);
      console.log(tag)
      const inputState: InputStateType = {
        id: tag.getAttribute('id') || '',
        check: essentialChk(tag)
      }
      console.log(inputState)
      setValidation(prev => [
        ...prev,
        inputState
      ])
    }
  }, []);
  // 필수가 아닌 요소 true 반환
  const essentialChk = (checkTag:HTMLInputElement):boolean =>{
    const essentialName = ['signup-simpleid'];
    const tagID = checkTag.getAttribute('id') 
    return tagID && essentialName.includes(tagID) ? true : false
  }
  // 각 input 유효성 검사 체크 업데이트: 통과-true, 실패-false
  const inputValidationUpdate = useCallback((inputID:string, state:boolean) => {
    const checkUpdate = {check : state }
    setValidation(prev => prev.map((item) => 
      item.id === inputID ? {...item, ...checkUpdate } : item
    ))
  }, []);

  // alert message
  const messageCase = (messageCheck: string) => {
    const messages: { [key: string]: string } = {
      signupEmail: "이메일",
      signupID: "간편 아이디",
      nickName: "닉네임",
      password: "비밀번호",
      passwordCheck: "비밀번호 재입력"
    };
    return messages[messageCheck] || "입력";
  }

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const hasChecked = validation.find(item=>!item.check);
    if(hasChecked){
      let message = messageCase(hasChecked.id);
      let focusInput = refList.current.find(refItem => refItem.getAttribute('id') === hasChecked.id)
      console.log(`❌ ${message}을 다시 확인해주세요.`)
      focusInput?.focus();
    }else{
      // 유효성 검사 통과 시 
      // handleSignup();
    }
  },[validation])


  const handleSignup = async () => {
    const resultData : UserDataType = {
      id:'',
      email: refList.current[0].value,
      loginID:refList.current[1].value || '',
      nickName:refList.current[2].value,
      password:refList.current[3].value,
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
      // const userCredential = await createUserWithEmailAndPassword(auth, resultData.email, resultData.password);
      // resultData.uid = userCredential.user.uid ? userCredential.user.uid : '';
      // resultData.password = randomNum(9999, 'secret-login');
      // 📍 firebase에 user 정보 저장
      // await userPushDataDoc(resultData);
      // 완료 레이어 팝업 -> member 이동
      // navigate('/member');
    } catch (error) {
      console.log(error) // 에러 안내 팝업 
    }
  };

  // await setDoc(doc(fireDB, 'emails', email), { createdAt: serverTimestamp() });
  return(
    <StyleWrap>
      <h2 className="title">회원가입</h2>
      <div className="form-wrap">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          {/* 이메일 */}
          <div className="form-item">
            <EmailForm 
              refPush={refListCheck}
              validationUpdate={inputValidationUpdate}
            />
          </div>
          {/* 간편 아이디 */}
          <div className="form-item">
            <SimpleIDForm 
              refPush={refListCheck}
              validationUpdate={inputValidationUpdate}
            />
          </div>
          {/* 닉네임 */}
          <div className="form-item">
            {/* <NickNameForm 
              validationUpdate={validationUpdate}
            /> */}
          </div>
          {/* 비밀번호  */}
          <div className="form-item">
            {/* <PasswordForm1 
              validationUpdate={validationUpdate}
            /> */}
          </div>
          {/* 비밀번호 확인 */}
          <div className="form-item">
            {/* <PasswordForm2 
              validationUpdate={validationUpdate}
            /> */}
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