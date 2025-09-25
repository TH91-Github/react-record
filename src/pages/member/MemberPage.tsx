import { bgTranslucence, media } from "assets/style/variables";
import { Login } from "components/pages/member/Login";
import { SignUp } from "components/pages/member/SignUp";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stateHeaderHeight } from "recoilStore/atoms";
import { RootState } from "reduxStore/store";
import styled from "styled-components";

export const MemberPage = () => {
  const {isLogin} = useSelector((state : RootState) => state.storeUserLogin);
  const headerHeight = useRecoilValue(stateHeaderHeight);
  const [signType, setSignType] = useState(false);

  const authChange = () => {
    setSignType(prev => !prev)
  }

  // 로그인 되어 있으면 즉시 "/"로 리다이렉트
  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return (
    <StyleWrap $headerHeight={headerHeight}> 
      <div className="member-inner">
        {/* 로그인 되어 있는 경우 / 으로  */}
        {!signType ? (
          <Login authChange={authChange} />
        )
        : (
          <SignUp authChange={authChange} />
        )}
      </div>
    </StyleWrap>
  )
}

interface StyleWrapPropsType { 
  $headerHeight: number,
}
const StyleWrap = styled.div<StyleWrapPropsType>`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height: calc(100svh - ${({$headerHeight}) => $headerHeight}px);
.member-inner{
  width:100%;
  max-width:500px;
  margin:0 auto;
  padding:30px;
  border-radius:10px;
  ${bgTranslucence.baseLight};
}
${media.mo}{
  display:block;
  height:auto;
  padding:30px 15px;
  .member-inner{
    min-height: calc(100svh - ${({$headerHeight}) => $headerHeight}px - 60px);
  }
}
`;