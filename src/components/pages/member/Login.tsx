import { colors, textColor, textShadow } from "assets/style/variables";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import { LoginIDForm } from "./LoginIDForm";
import { LoginPWForm } from "./LoginPWForm";

interface LoginPropsType {
  authChange: () => void
}
export const Login = ({authChange}:LoginPropsType) =>{ 
  const inputID = useRef<InputItemModuleRefType>(null);
  const inputPW = useRef<InputItemModuleRefType>(null);

  const handleSubmit = useCallback( async(e: React.FormEvent) => {
    e.preventDefault()
  },[])


  const handleChangeClick = () => { // 회원가입 바로가기
    authChange();
  }
  return(
    <StyleWrap>
      <h2 className="title">로그인</h2>
      <div className="form-wrap">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <LoginIDForm />
          <LoginPWForm />
          <div className="btn-article">
            <button type="submit" className="btn btn-submit full">
              <span>로그인</span>
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
`;