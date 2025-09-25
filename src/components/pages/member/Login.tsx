import { colors, textColor, textShadow } from "assets/style/variables";
import { IconGoogle } from "assets/svg/icons";
import { Loading } from "components/common/Loading";
import { InputItemModule, InputItemModuleRefType } from "components/modules/InputItemModule";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useToast } from "hooks/useToast";
import { getUserColDoc, userPushDataDoc } from "lib/firebase/auth";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionUserCreate, RootState } from "reduxStore/store";
import styled from "styled-components";
import { UserDataType } from "types/auth";
import { isInvalidEmail, validIDPW } from "utils/auth";
import { cn, randomNum } from "utils/common";
import { auth, provider } from "../../../firebase";

interface LoginPropsType {
  authChange: () => void
}

const INPUTID = 'loginID';
const INPUTPW = 'loginPW';
export const Login = ({ authChange }:LoginPropsType) => { 
  const {isLoading} = useSelector((state : RootState) => state.storeUserLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const inputIDRef = useRef<InputItemModuleRefType>(null);
  const inputPWRef = useRef<InputItemModuleRefType>(null);
   const [errorMessages, setErrorMessages] = useState<Record<string, string>>({
      [INPUTID]: '',
      [INPUTPW]: '',
    });
  
  // 🔹 회원가입 바로가기
  const handleChangeClick = () => {
    authChange();
  }

  const handleFocus = useCallback((ID: string, message: string) => {
    setErrorMessages(prev => ({ ...prev, [ID]: message }));
  }, []);

  const disapproval = useCallback((ID: string, message: string) => {
    setErrorMessages(prev => ({ ...prev, [ID]: message }));
  }, []);


  // email or 간편 ID 체크 후 중복 조회 및 간편 ID - email 가져오기
  const validationID = useCallback(async(val : string) => {
    const colVal = val.includes('@') ? 'emails' : 'simpleIDs';
    let resultID = val;
    if(colVal === 'emails'){ // email 유효성 체크
      if (isInvalidEmail(val)) {
        disapproval(INPUTID, '유효하지 않은 이메일 형식이에요. 🤔');
        return;
      }
      return resultID
    }else{ // 간편 ID 유효성 체크
      // console.log('간편 ID 입니다')
      const IDCheck = validIDPW(val,'ID');
      if (IDCheck) { // email & ID 유효성 체크
        disapproval(INPUTID, IDCheck);
        return
      }
      const isDuplicate = await getUserColDoc(colVal, val);
      if(isDuplicate) resultID = isDuplicate.email
      return resultID
    }
  },[disapproval])
  
  // firebase 로그인 시도
  const handleLogin = useCallback(async (loginID: string, loginPW: string) => {
    dispatch(actionUserCreate({ isLoading: true }));
    try {
      await signInWithEmailAndPassword(auth, loginID, loginPW);
      // 로그인 정보 입력은 LoginStatusCheck.tsx 진행
      navigate('/');
    } catch (error) {
      addToast('로그인에 실패했어요', 'error')
    }
    dispatch(actionUserCreate({ isLoading: false }));
  },[dispatch, addToast, navigate]);


  // 🔹 완료 
  const handleSubmit = useCallback(async(e: React.FormEvent) => {
    e.preventDefault()
    if(!inputIDRef.current || !inputPWRef.current) return 
    const valID= inputIDRef.current.refModuleValue();
    const valPW = inputPWRef.current.refModuleValue();
    
    const checkID = await validationID(valID);
    const checkPW = validIDPW(valPW,'PW');

    if(checkPW){ // 비밀번호 기본 유효성 체크 
      disapproval(INPUTPW, checkPW);
      return
    }
 
    if(checkID && valPW) {
      handleLogin(checkID, valPW);
    }
  },[disapproval, handleLogin, validationID])

  // 🔹 구글 아이디 로그인 및 계정 등록
  const handleGoogleLogin = useCallback(async() => { 
    try {
      dispatch(actionUserCreate({ isLoading: true }));

      const googleData = await signInWithPopup(auth, provider);
      const fireDBGoogle = await getUserColDoc('userLists', googleData.user.uid)

      if(!fireDBGoogle){ // 구글 로그인 신규 회원 DB 저장
        const {email, displayName, uid} = googleData.user;
        if(!email || !displayName || !uid) return
        const resultData : UserDataType = {
          id:googleData.user.uid,
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
          uid: googleData.user.uid,
        }
        await userPushDataDoc(resultData);
        // console.log('구글 계정 생성')
      }else{
        // console.log('계정 정보 있음')
      }
      dispatch(actionUserCreate({ isLoading: false }));
      navigate('/');
    } catch (error) {
      addToast('구글 로그인 에러 😲', 'error')
    }
  },[dispatch, addToast, navigate])

  return(
    <StyleWrap>
      <h2 className="title">로그인</h2>
      <div className="form-wrap">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className={cn('form-item', errorMessages[INPUTID] && 'error')}>
            <InputItemModule 
              ref={inputIDRef}
              id={INPUTID} 
              title="아이디 or 이메일"
              focusColor={colors.blue}
              focusEvent={() => handleFocus(INPUTID, '')}
            />
            <div className="description">
              { errorMessages[INPUTID] &&  <p className="txt">{errorMessages[INPUTID]}</p> }
            </div>
          </div>
          <div className={cn('form-item', errorMessages[INPUTPW] && 'error')}>
            <InputItemModule 
              ref={inputPWRef}
              id={INPUTPW} 
              title="비밀번호"
              type="password"
              focusColor={colors.blue}
              focusEvent={() => handleFocus(INPUTPW, '')}
            />
            <div className="description">
              { errorMessages[INPUTPW] &&  <p className="txt">{errorMessages[INPUTPW]}</p> }
            </div>
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
      {
        isLoading && <Loading dimmed={true} mode="body"/>
      }
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
position:relative;
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
  position:relative;
  margin-top:5px;
  padding-left:10px;
  height:15px;
  .txt {
    position:absolute;
    top:0;
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