import { colors, textColor, textShadow } from "assets/style/variables";
import { IconGoogle } from "assets/svg/icons";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { signInWithPopup } from "firebase/auth";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../../../firebase";
import { LoginIDForm } from "./LoginIDForm";
import { LoginPWForm } from "./LoginPWForm";
import { cn, randomNum } from "utils/common";
import { UserDataType } from "types/auth";
import { checkDocDuplicate, userPushDataDoc } from "lib/firebase/auth";

interface LoginPropsType {
  authChange: () => void
}

const inputID = 'loginID';
const inputPW = 'loginPW';
export const Login = ({authChange}:LoginPropsType) => { 
  const navigate = useNavigate();
  const inputIDRef = useRef<InputItemModuleRefType>(null);
  const inputPWRef = useRef<InputItemModuleRefType>(null);
  const [duplicateID, setDuplicateID] = useState<string[]>([]); 
   const [errorMessages, setErrorMessages] = useState<Record<string, string>>({
      [inputID]: '',
      [inputPW]: '',
    });
  
  console.log('login')

  const handleFocus = useCallback((inputID: string, message: string) => {
    setErrorMessages(prev => ({ ...prev, [inputID]: message }));
  }, []);

  const validationID = useCallback(async(idVal : string) => {
    const colVal = idVal.includes('@') ? 'emails' : 'simpleIDs';

    
    
    // const loginValue = await duplicateGetDoc('userData','users', key , idVal);
    // email 인지 id 인지 판단 후 email일 경우 진행 
    // id일경우 id 조회 후 email 가져오기
    // return  (loginValue && idVal.length > 0) ? ( key === 'email' ? idVal : loginValue.email) : false
  },[duplicateID])

 const handleSubmit = useCallback( async(e: React.FormEvent) => {
    e.preventDefault()
    if(!inputIDRef.current || !inputPWRef.current) return 
    const valID= inputIDRef.current.refModuleValue();
    const valPW = inputPWRef.current.refModuleValue();
    validationID(valID)



  },[])

  // 🔹 회원가입 바로가기
  const handleChangeClick = () => {
    authChange();
  }

  // 🔹 구글 아이디 로그인 및 계정 등록
  const handleGoogleLogin = useCallback(async() => { 
    try {
      const googleData = await signInWithPopup(auth, provider);
      const {email, displayName, uid} = googleData.user
      if(!email || !displayName || !uid) return
      const resultData : UserDataType = {
        id:'',
        email: email,
        simpleID: '',
        nickName: displayName,
        password: randomNum(9999, 'google-login'),
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
      // DB 저장
      await userPushDataDoc(resultData);
      navigate('/');
     } catch (error) {
      console.log("구글 로그인 에러 😲", error);
    }
  },[ navigate])

  return(
    <StyleWrap>
      <h2 className="title">로그인</h2>
      <div className="form-wrap">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className={cn('form-item', errorMessages[inputID] && 'error')}>
            <InputItemModule 
              ref={inputIDRef}
              id={inputID} 
              title="아이디 or 이메일"
              focusColor={colors.blue}
              focusEvent={() => handleFocus(inputID, '')}
            />
            {
              errorMessages[inputID] && (
                <div className="description">
                  <p className="txt">
                    {errorMessages[inputID]} 
                  </p>
                </div>
              )
            }
            
          </div>
          <div className={cn('form-item', errorMessages[inputPW] && 'error')}>
            <InputItemModule 
              ref={inputPWRef}
              id={inputPW} 
              title="비밀번호"
              focusColor={colors.blue}
              focusEvent={() => handleFocus(inputPW, '')}
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
        <span>아이디가 없으신가요?</span>
        <button 
          className="auth-btn"
          onClick={handleChangeClick}
        >
          <span>회원가입</span>
        </button>
        <span>바로 가기</span>
      </div>
      <div className="sns-wrap">
        <ul>
          <li>
            <button 
              title={'구글 로그인'}
              className="btn"
              onClick={handleGoogleLogin}
            >
              <span className="icon"><IconGoogle /></span>
            </button>
          </li>
        </ul>
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
      background:${colors.mSlateBlue};
      transform: translateX(-50%) scaleX(1);
      animation: formLineAni 1s .3s ease both;
      content:'';
    }
    @keyframes formLineAni {
      from{ transform: translateX(-50%) scaleX(0);}
      to { transform: translateX(-50%) scaleX(1); }
    }
  }
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
  .btn-article{
    margin-top:30px;
  }
  .btn-submit{
    border:1px solid ${colors.mSlateBlue};
    &:hover, &:focus {
      background:${colors.mSlateBlue};
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
      color:${colors.blue};
      &::after{
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:2px;
        background: ${colors.blue};
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
  .sns-wrap{
    margin-top:20px;
    text-align:center;
    & > ul { 
      display: flex;
      justify-content:center;
      gap: 10px;
      margin-top:10px;
    }
    .btn {
      border-radius:50%;
      &:hover, &:focus{
        border-color:${colors.mSlateBlue};
      }
    }
  }
`;