import {React} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";

// component
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";
// styled
import * as SC from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import { colors} from "component/styled/common/Variable";

function UseEffectTest () {
  const cssGap = "20px 0 0 0";

  const code1 = `import {useEffect} from "react";`;
  const code2 = `1. 초기 렌더링, 재렌더링 시 실행 👇\n useEffect(() => {\n  //실행 함수\n    console.log("useEffect");\n  });\n\n 2. dependency arry : 빈 배열 첫 렌더링에만(mount) 실행 👇\n useEffect(() => {\n  //실행 함수\n    console.log("useEffect");\n },[]);\n\n3. dependency arry : 최초 렌더링 1회 및 val 값이 변경 시 실행 👇\n useEffect(() => {\n  //실행 함수\n    console.log("useEffect");\n },[val])\n\n 4. clean up : unmount 시 실행(컴포넌트 삭제 및 다른 컴포넌트 이동) 👇\n useEffect(() => {\n  //실행 함수\n    console.log("useEffect");\n    return () => {\n      console.log("clean up function");\n    };\n });`
  return (
    <div className="study">
      <SC.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
        <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
        <div className="study__header">
          <SC.SnsBoxText $lineHeight="20px">
            <SC.A 
              href="https://velog.io/@th_velog/React-useEffect" target="_blank" rel="noopener noreferrer" $display="flex">
              <SC.Icon><SvgVelog color="#20C997"></SvgVelog></SC.Icon>
              <SC.SnsText $margin="0 0 0 10px">👈 Velog 확인하기</SC.SnsText>
            </SC.A>
          </SC.SnsBoxText>
          <TitleBar $fontSize="24px">📌 React - useEffect</TitleBar>
        </div>
        <SC.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>useEffect란?</SubTitleBar>
          <p className="desc">React Hook</p>
          <p className="desc">클래스형 컴포넌트에서 라이프 사이클을 사용하는데 함수형 컴포넌트에서도 useEffect를 통해<br />라이프 사이클(마운트,업데이트,언마운트) 사용할 수 있게 됩니다.</p>
          <p className="desc"> 마운트-처음 렌더링 시, 업데이트- 특정 값 변경 시, 언마운트-사자질때/컴포넌트를 떠날 때 발생</p>
          <p className="desc">useEffect는 html 렌더링 후 실행</p>
          <p className="desc">컴포넌트가 처음 렌더링, 리렌더링, 두 번째 인자 []에 선언된 값이 변경되면 실행됩니다.</p>
          <p className="desc"> 두 번째 인자로 배열을 받는데 이 배열을 <SC.ColorTag $color={colors.red}>Dependency Array</SC.ColorTag>라고 합니다.</p>
          <SC.ListBarUl>
            <SC.LiBar $bg={colors.subTextColor}><p className="desc"><SC.ColorTag $color={colors.red}>dependency</SC.ColorTag>는 useEffect, useCallback 등 Hook에서 사용되는 배열</p></SC.LiBar>
            <SC.LiBar $bg={colors.subTextColor}><p className="desc">두 번째 인자에 입력된 값이 변경될 때마다 실행</p></SC.LiBar>
            <SC.LiBar $bg={colors.subTextColor}><p className="desc">불필요하게 반복되는 것을 방지</p></SC.LiBar>
            <SC.LiBar $bg={colors.subTextColor}><p className="desc">[] 빈 값일 경우 첫 렌더링에 1회만 실행.</p></SC.LiBar>
          </SC.ListBarUl>
          <p className="desc">useEffect 훅을 사용하면 함수형 컴포넌트에서도 side Effect를 실행할 수 있게 됩니다.</p>
        </SC.BoxLine>
        <SC.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>useEffect 사용 목적</SubTitleBar>
          <p className="desc">useEffect는 HTML 렌더링 후 실행을 하기에 복잡한 연산을 하여 지연이 되는 경우 html이 보이지 않는 문제를 해결하기 위해.</p>
          <p className="desc">서버에서 데이터를 가져오는 경우</p>
          <p className="desc">특정 값 변경 시 동작</p>
          <p className="desc">최초 렌더링 시에만 실행할 수 있도록, 리렌더링 시 동작❌</p>
        </SC.BoxLine>
        <SC.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar> useEffect 사용 방법</SubTitleBar>
          <p className="desc">useEffect는 HTML 렌더링 후 실행을 하기에 복잡한 연산을 하여 지연이 되는 경우 html이 보이지 않는 문제를 해결하기 위해.</p>
          <p className="desc">서버에서 데이터를 가져오는 경우</p>
          <p className="desc">특정 값 변경 시 동작</p>
          <p className="desc">최초 렌더링 시에만 실행할 수 있도록, 리렌더링 시 동작❌</p>
          <p className="tit">🎈 useEffect import</p>
          <CodeTemplate text={code1}/>
          <p className="tit">🎈 useEffect 입력</p>
          <CodeTemplate text={code2}/>
        </SC.BoxLine>
      </SC.BoxLine>
    </div>
  )
}

export default UseEffectTest;