import { bgTranslucence } from "assets/style/variables";
import { Login } from "components/pages/member/Login";
import { SignUp } from "components/pages/member/SignUp";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { stateHeaderHeight } from "recoil/atoms";
import styled from "styled-components"

export const MemberPage = () => {
  const headerHeight = useRecoilValue(stateHeaderHeight);
  const [signType, setSignType] = useState(false);

  const authChange = () => {
    setSignType(prev => !prev)
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
    max-width:450px;
    margin:0 auto;
    padding:30px;
    border-radius:10px;
    ${bgTranslucence.baseLight};
  }
`;