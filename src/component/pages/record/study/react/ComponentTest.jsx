import {React} from "react";
import CodeTemplate from "component/common/CodeTemplate";
import BackBtn from "component/common/BackBtn";
// styled
import * as S from "component/styled/common/AllStyled";
import { SvgVelog } from "component/styled/common/SvgPath";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

function ComponentTest () {

  const code1 = `// 👇클래스형 컴포넌트\nclass 컴포넌트 extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n// 👇함수형 컴포넌트\nfunction 컴포넌트(props) {\n    return <h1>Hello, {props.name}</h1>;\n}`;
  const code2 = ` // 함수 컴포넌트\n function Velog(){\n  return (\n    <div>Velog 컴포넌트 생성</div>\n  )\n }\n // 화살표 문법으로도 작성 가능\n const Velog2 = () => {\n  return (\n    <div>Velog2 컴포넌트 생성</div>\n  )\n}`;
  const code3 = `// Velog.jsx\nimport React from "react";\nfunction Velog(){\n// javascript 입력하는 곳\n  return ( \n  // 👇JSX 문법 입력하는 곳\n  <div>Velog</div>\n  )\n}\nexport default Velog;`;
  const code4 = `// 부모 컴포넌트\n<p>👇 문자열 사용하기</p>\n<Velog props="props" />\n<p>👇 그 외 값(변수, 상위 props 등 등)</p>\n<Velog props={props} />;`
  const code5 = `// Velog.jsx\nfunction Velog({props}){\n  console.log(props);\n  return (\n    <div>{props}</div>\n  )\n}`
  const cssGap = "20px 0 0 0";
  return (
    <div className="study">
      <S.BoxLine $maxWidth="1000px" $margin="50px auto 0" $padding="30px">
        <BackBtn $position="absolute" $top="10px" $right="10px" fontSize="20px">↩️</BackBtn>
        <div className="study__header">
          <S.SnsBoxText $lineHeight="20px">
            <S.A 
              href="https://velog.io/@th_velog/React-컴포넌트-생성-및-Props" target="_blank" rel="noopener noreferrer" $display="flex">
              <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
              <S.SnsText $margin="0 0 0 10px">👈 Velog 확인하기</S.SnsText>
            </S.A>
          </S.SnsBoxText>
          <TitleBar fontSize="24px">📌 컴포넌트 생성 및 Props</TitleBar>
        </div>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>Component</SubTitleBar>
          <p className="desc">✅ 컴포넌트란?</p>
          <p className="desc">리액트에서 앱을 이루는 가장 작은 조각이라고 하며, UI 요소를 구분할 때 컴포넌트라고 사용을 합니다!</p>
          <p className="desc">반복적으로 사용하는 요소를 컴포넌트로 만들어 재사용하면 보다 효과적으로 사용할 수 있습니다.</p>
          <p className="desc">✅ 컴포넌트 이름은 항상 대문자로 시작해야합니다</p>
          <p className="desc">소문자로 시작하는 컴포넌트를 DOM 태그로 처리한다고 해요.</p>
          <CodeTemplate text={code1}/>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>컴포넌트 생성</SubTitleBar>
          <CodeTemplate text={code2}/>
          <p className="desc">src 폴더 내 component 폴더를 만들고 대문자로 파일명 작성 후 .jsx 확장자로 만든다.</p>
          <CodeTemplate text={code3}/>
          <p className="desc"> 👆 파일 생성 후 해당 컴포넌트를 사용하는 곳에서 import로 불러온 후 사용.</p>
        </S.BoxLine>
        <S.BoxLine $top $margin={cssGap} $padding={cssGap} className="box">
          <SubTitleBar>props</SubTitleBar>
          <p className="desc">✅ Props란?</p>
          <p className="desc">props(property)는 상위 컴포넌트(부모)가 하위 컴포넌트(자식) 에게 값을 전달할 때 사용을 하는 속성</p>
          <p className="desc">부모는 수정이 가능하지만 자식은 수정이 불가능하고 읽기만 가능합니다.</p>
          <CodeTemplate text={code4}/>
          <p className="desc">✅ props 사용하기</p>
          <p className="desc">문자열을 전달할 때는 "" 큰따옴표를 사용하고 그 외의 값을 전달할 경우에는 {"{ } "}중괄호를 사용합니다</p>
          <CodeTemplate text={code5}/>
          <p className="desc">전달 받은 배열 값은 JSX문법에 맞게 {"{ } "} 중괄호를 사용</p>
        </S.BoxLine>
      </S.BoxLine>
    </div>
  )
}

export default ComponentTest;