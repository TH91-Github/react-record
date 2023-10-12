import {React, useEffect, useState} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

function UseEffectTest () {
  const code1 = `HTML`;
  const cssGap = "20px 0 0 0";


  const [number, setNumber] = useState(0);
  function numberClick(){
    console.log("number 변경:"+number)
    setNumber(number+1);
  }
  useEffect(()=>{
    console.log("useEffect!");
    document.querySelector('.btn').addEventListener("click", ()=>{
      console.log("click 추가!")
    })
    return () => {
      console.log("clean up")
    }
  },[number])
  
  return (
    <div>
      <button type="button" onClick={numberClick}>Number</button>
      <button type="button" className="btn">useEffect 클릭 기능 추가</button>
    </div>






    // <div className="study">
    //   <S.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
    //     <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
    //     <div className="study__header">
    //       <S.SnsBoxText $lineHeight="20px">
    //         <S.A 
    //           href="https://velog.io/@th_velog/React-컴포넌트-생성-및-Props" target="_blank" rel="noopener noreferrer" $display="flex">
    //           <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
    //           <S.SnsText $margin="0 0 0 10px">👈 Velog 확인하기</S.SnsText>
    //         </S.A>
    //       </S.SnsBoxText>
    //       <TitleBar fontSize="24px">📌 React - useEffect</TitleBar>
    //     </div>
    //     <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
    //       <SubTitleBar>Component</SubTitleBar>
    //       <p className="desc">✅ 컴포넌트란?</p>
    //       <CodeTemplate text={code1}/>
    //     </S.BoxLine>
    //   </S.BoxLine>
    // </div>
  )
}

export default UseEffectTest;