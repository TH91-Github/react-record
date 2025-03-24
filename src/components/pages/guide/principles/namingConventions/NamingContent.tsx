import styled from "styled-components"
import { namingConventionsData as baseData, namingData } from "../../data/namingData";
import { colors } from "assets/style/Variable";

interface NamingContentPropsType {
  selectNaming: null | string;
}
export const NamingContent = ({selectNaming}:NamingContentPropsType) => {

  console.log(selectNaming)
  console.log(baseData)
  return( 
    <StyleWrap>
      {/* 데이터 활용 */}
      <div className="naming-base">
        <h4 className="title">{baseData.title}</h4>
        {
          baseData.url && (
            <a href={baseData.url} target="_blank" rel="noopener noreferrer">티스토리</a>
          )
        }
        <ul className="naming-lists">
          {
            baseData.lists.map((item, idx) => (
              <li key={idx}>
                <p className="tit">
                  {item.tit}
                  <span>{item.enTit}</span>
                </p>
                {
                  item.descLists.map((descItem, descIdx) => (
                    <p key={descIdx}>{descItem}</p>
                  ))
                }
              </li>
            ))
          }
        </ul>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  padding:30px;
  .naming-lists{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:20px;
    & > li {
      width:calc((100% - 10px) / 2);
      padding:20px;
      border-radius:10px;
      border:1px solid ${colors.lineColor};
    }
  }
`;
/*
  EX) 작성 가이드
{ 


카멜 표기법 (Camel Case)

- camelCase
- 단봉낙타 표기법
- 각 단어의 첫문자를 대문자로 표기하고 붙여쓰는 표기법
- 띄어쓰기 대신 대문자로 단어를 구분하는 표기 방식
- 예시 : backgroundColor, typeName, iPhone

 

파스칼 표기법 (PasCal Case)

단어와 단어 사이를 점이나 공백없이 대소문자로 구별. 낙타의 혹처럼 둘쑥날쑥
- 쌍봉낙타 표기법
- 첫 단어를 대문자로 시작하는 카멜 표기법
- 예시 BackgroundColor, TypeName, PowerPoint

 

스네이크 표기법 (Snake Case)

- 단어를 밑줄문자로 구분하는 표기법
- 예시 : background_color, type_name

 

헝가리언 표기법 (Hungarian Case) 

변수 선언시 접두어를 붙여 변수의 의미를 명확하게 하기 위한 규칙 
- ex) strName, bBusy, szName
○접두어 예시
  - b : 불리언(boolean)
  - ch : 문자(char)
  - f : float 
  - sz : NULL로 끝나는 문자열 (string+zero)

  

}
*/


