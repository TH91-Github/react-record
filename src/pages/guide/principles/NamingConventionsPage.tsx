import { NamingContent } from "components/pages/guide/principles/namingConventions/NamingContent";
import { NamingHeader } from "components/pages/guide/principles/namingConventions/NamingHeader";
import styled from "styled-components";

export const NamingConventionsPage = () => {
  return (
    <StyleWrap className="naming-convention">
      <div className="naming-inner">
        <NamingHeader />
        <NamingContent />
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  
`;



// 대표적인 네이밍 컨벤션
// camelCase 
// 카멜 케이스
// 맨 앞 단어의 첫 철자를 소문자로 시작하되, 그 다음 이어지는 단어의 첫 철자를 대문자로 표기하는 방식이에요.
// 첫 단어를 제외한 각 단어가 혹이 솟아오른 단봉낙타 등처럼 보여요.


// UpperCamelCase, PascalCase 
// 어퍼 카멜 케이스, 파스칼 케이스
// 맨 첫 단어를 비롯한 모든 단어마다 첫 철자를 대문자로 표기하는 방식이에요.
// 단어마다 솟아오른 철자가 쌍봉낙타 등처럼 보여 붙은 이름이죠.
// 클래스(Class) 이름을 지정하는 데 많이 쓰여요.
// 예: UserProfile, ShoppingCart


// snake_case 
// 스네이크 케이스
// 모든 철자를 소문자로 쓰고 단어 사이에 언더스코어_를 표기하는 방식이에요.
// 단어를 연결하는 언더스코어가 뱀의 몸처럼 보인다며 붙은 이름입니다.
// 파이썬(Python) 등에서 주로 권장하며, DB 컬럼(column)명으로도 흔히 사용돼요.
// 예: user_id, created_at, phone_number


// SCREAMING_SNAKE_CASE
// 스크리밍 스네이크 케이스
// 모든 철자를 대문자로 쓰고 단어 사이에 언더스코어_를 표기하는 방식이에요.
// 대문자 철자가 소리를 지르듯(Screaming) 강조하는 느낌을 주죠.
// 주로 프로그램 실행 중 값이 변하지 않아야 하는 특정 상수(Constant)를 강조하는 데 사용돼요.
// 예: DEFAULT_FONT_SIZE