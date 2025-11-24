import { Modal } from "components/common/Modal";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { getUserColDoc } from "lib/firebase/auth";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actionUserLogin, actionUserLogout, RootState } from "reduxStore/store";
import styled from "styled-components";
import { auth } from "../../../firebase";

// 기능 분리 및 재구성 필요
const LOCALSTORAGE_KEY = "th-logoutTime"; // 로컬 스토리지와 쿠키에 사용될 key 
export const LoginStatusCheck = () => {
  const {isLoading} = useSelector((state : RootState) => state.storeUserLogin);
  const dispatch = useDispatch();
  const expireType:string = 'minutes';// 분으로 설정 minutes, hours 그 외  day
  const cutTime = 40; // 만료 시간
  const [extensionPop, setExtensionPop] = useState(false); 
  const extensionTimeRef =  useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoCloseTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoCloseSecond = 4000;

  // clearTime
  const clearAllTimeouts = useCallback(() => {
    if (extensionTimeRef.current) clearTimeout(extensionTimeRef.current);
    if (autoCloseTimeRef.current) clearTimeout(autoCloseTimeRef.current);
  }, []);

  // ✅ 로그인 초기화 dispatch
  const userLoginInit = useCallback(() => { 
    dispatch(actionUserLogout());
    localStorage.removeItem(`${LOCALSTORAGE_KEY}accessToken`);
    localStorage.removeItem(`${LOCALSTORAGE_KEY}expirationTime`);
    // 쿠키 초기화 - 만료
    document.cookie = `${LOCALSTORAGE_KEY}accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    setExtensionPop(false);
  },[dispatch])

  // ✅ 로그아웃
  const handleLogOut = useCallback(async()=>{
    await signOut(auth);
    userLoginInit(); // 상태 초기화
    clearAllTimeouts();
  },[userLoginInit, clearAllTimeouts])

  
  const handleConfirmation = async() => {
    clearAllTimeouts();
    setExtensionPop(false);
    const user = auth.currentUser;
    if (user) {
      const newToken = await user.getIdToken(true);  // 토큰 갱신
      loginTokenSave(newToken);
    }
  }

  // 📍 쿠키 추가 - 토큰, 만료 지정
  const setCookie = (key: string, token: string) => {
    const cookieDate = new Date();
    switch(expireType) {
      case 'minutes':
        cookieDate.setTime(cookieDate.getTime() + (cutTime * 60 * 1000));
        break;
      case 'hours':
        cookieDate.setTime(cookieDate.getTime() + (cutTime * 60 * 60 * 1000));
        break;
      default:
        cookieDate.setDate(cookieDate.getDate() + cutTime); // firebase token 최대 14일 
    }
    document.cookie = `${key}=${encodeURIComponent(token)}; path=/; expires=${cookieDate.toUTCString()};`;
  }
  // 📍 쿠키 가져오기 - 정규표현식을 사용해서 쿠키들을 분리, 일치하는 쿠키 키를가진 쿠키를 찾아 쿠키를 반환
  const getCookie = (key: string) => {
    const keyRegExp = new RegExp(key + '=([^;]*)'); 
    const match = document.cookie.match(keyRegExp); // 쿠키에서 정규식과 일치하는 부분을 찾음
    return match ? decodeURIComponent(match[1]) : ''; // 일치하는 값이 있으면 반환
  }

  // 유효 시간 전 유지 질문
  const loginExtensionChk = useCallback((remainingTime :number) => {
    clearAllTimeouts();
    extensionTimeRef.current = setTimeout(() => {
      setExtensionPop(true);
    }, remainingTime - autoCloseSecond + 500); // 자동 닫기(로그아웃) 팝업 시간 뺀 시간
  },[clearAllTimeouts]);
  
  
  // ✅ fireDB 체크 및 store 업데이트
  const loginUpdate = useCallback(async(userId: string) => {
    try { 
      const userData = await getUserColDoc('userLists', userId);
      if(userData){
        dispatch(actionUserLogin({ user: userData }));
      }else{ // 유저 정보가 없다면 로그아웃 
        handleLogOut()
      }
    }catch(error){
      // firebase store에 등록된 정보가 없다면 초기화
      console.log('해당 로그인 정보가 없습니다.');
      await signOut(auth);
    }
  },[dispatch, handleLogOut]);
  
  // ✅ 로컬스토리지 쿠키 관련 저장
  const loginTokenSave = useCallback((token: string) =>{
    const accessTime = new Date().getTime();
    let resultExpire;

    switch(expireType) {
      case 'minutes': // 분 단위
        resultExpire = accessTime + (cutTime * 60 * 1000);
        break;
      case 'hours': // 시간 단위
        resultExpire = accessTime + (cutTime * 60 * 60 * 1000);
        break;
      default: // 기본 일 단위
        resultExpire = accessTime + (cutTime * 24 * 60 * 60 * 1000);
    }
    localStorage.setItem(`${LOCALSTORAGE_KEY}accessToken`, token);
    localStorage.setItem(`${LOCALSTORAGE_KEY}expirationTime`, resultExpire.toString());
    setCookie(`${LOCALSTORAGE_KEY}accessToken`, token);
    loginExtensionChk(resultExpire - accessTime);
  },[loginExtensionChk]);
  
  // ✅ 로그인 체크
  const loginStatus = useCallback(async(user: User | null) => {
    if(isLoading) return
    if (user) {
      const accessToken = localStorage.getItem(`${LOCALSTORAGE_KEY}accessToken`);
      const expirationTime = localStorage.getItem(`${LOCALSTORAGE_KEY}expirationTime`);
      const storedAccessToken = getCookie(`${LOCALSTORAGE_KEY}accessToken`); // 쿠키에서 토큰 가져오기
      const currentAccessTime = new Date().getTime();

      // 로그인 유지 체크
      if (accessToken && expirationTime) { 
        // 시간 내 + 토큰 비교
        if (currentAccessTime < parseFloat(expirationTime)) { 
          // 재접속 : 로그인 업데이트
          if(storedAccessToken && storedAccessToken === accessToken){ 
            loginUpdate(user.uid);
            // 새로고침, 재접속 후 남은 시간 팝업 노출
            loginExtensionChk(parseFloat(expirationTime) - currentAccessTime); 
          }else{ // 재접속 후 토큰 만료 및 토큰이 다를 경우 로그아웃
            handleLogOut();
          }
        }else{ // 시간이 오버된 경우 로그아웃 
          handleLogOut();
        }
      }else{ // 값이 없다면 추가 - 로그인 시도
        const userToken = await user.getIdToken(); // 새로운 토큰 가져오기
        loginTokenSave(userToken);
        loginUpdate(user.uid);
      }
    }else { // 로그아웃
      handleLogOut();
    }
  },[isLoading, loginTokenSave,loginUpdate, loginExtensionChk,handleLogOut]);

  // ✅ 로그인 / 로그아웃 onAuthStateChanged
  useEffect(()=>{
    const cleanupAuth = onAuthStateChanged(auth, loginStatus);
    return () => {  // clean up
      cleanupAuth();
      clearAllTimeouts();
    }
  },[loginStatus, clearAllTimeouts])

  return <>
     {
      extensionPop
      ?  
        <Modal
          $width={320}
          autoCloseSecond={autoCloseSecond}
          onClose={handleLogOut}
        >
          <StyleWrap className="extension">
            <p className="tit">
              로그인 유지 시간이 얼마 남지 않았습니다.<br />
              연장하시겠습니까?
            </p>
            <div className="btn-article">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleConfirmation}
              >
                <span>확인</span>
              </button>
              <button 
                type="button" 
                className="btn btn-gray"
                onClick={handleLogOut}
              >
                <span>취소</span>
              </button>
            </div>
          </StyleWrap>
        </Modal>
      : null
    }
  </>
}

const StyleWrap = styled.div`
padding-top:10px;
.btn-article{
  display:flex;
  justify-content: center;
  align-items:center;
  gap:10px;
  margin-top:20px;
}
`;