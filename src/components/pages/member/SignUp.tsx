import { colors, textColor, textShadow } from "assets/style/variables";
import { InputItemModule } from "components/modules/InputItemModule";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components"
import { EmailForm } from "./EmailForm";
import { PasswordForm1 } from "./PasswordForm1";
import { PasswordForm2 } from "./PasswordForm2";
import { SimpleIDForm } from "./SimpleIDForm";
import { NickNameForm } from "./NickNameForm";
import { randomIdChk } from "utils/common";

// input 조건 체크
interface InputStateType { 
  id: string, 
  name: string,
  check:boolean
}

interface SignUpPropsType {
  authChange: () => void
}

export const SignUp = ({authChange}:SignUpPropsType) =>{ 
  const refList = useRef<HTMLInputElement[]>([]);
  const [validation, setValidation] = useState<InputStateType[]>([])
  
  const handleChangeClick = () => { // 로그인 바로가기.
    authChange();
  }
  const inputUpdate = useCallback((el: HTMLInputElement) => {
    if (!refList.current.some(item => item === el)) {
      refList.current.push(el);
      const inputState: InputStateType = {
        id: randomIdChk(refList.current, 'input'),
        name: el.getAttribute('name') ?? '',
        check: essentialChk(el)
      }
      setValidation(prev => [
        ...prev,
        inputState
      ])
    }
  }, []);

  const essentialChk = (checkTag:HTMLInputElement):boolean =>{
    const essentialName = ['loginID'];
    const name = checkTag.getAttribute('name') 
    return name && essentialName.includes(name) ? true : false
  }

  const validationUpdate = useCallback(() => {
    
    // name:string|null, state:boolean
    // const checkUpdate = {check : state }
    // setValidation(prev => prev.map((item) => 
    //   item.name === name ? {...item, ...checkUpdate } : item
    // ))
  }, []);

  const handleSubmit = useCallback( async(e: React.FormEvent) => {
    e.preventDefault()
  },[])



  // 회원가입 시 emails로 ID
  // 간편 아이디 체크도 추가
  // await setDoc(doc(fireDB, 'emails', email), { createdAt: serverTimestamp() });
  return(
    <StyleWrap>
      <h2 className="title">회원가입</h2>
      <div className="form-wrap">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          {/* 이메일 */}
          <div className="form-item">
            <EmailForm 
              inputUpdate={inputUpdate}
              validationUpdate={validationUpdate}
            />
          </div>
          {/* 간편 아이디 */}
          <div className="form-item">
            <SimpleIDForm />
          </div>
          {/* 닉네임 */}
          <div className="form-item">
            <NickNameForm />
          </div>
          {/* 비밀번호  */}
          <div className="form-item">
            <PasswordForm1 />
          </div>
          {/* 비밀번호 확인 */}
          <div className="form-item">
            <PasswordForm2 />
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