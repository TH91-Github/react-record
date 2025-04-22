import styled from "styled-components";

interface TextHighlightPropsType {
  text:string; // 전체 텍스트 
  keyword:string; // 일치하는 텍스트
}
export const TextHighlight = ({text, keyword}: TextHighlightPropsType) => {
  const loweredText = text.toLowerCase();
  const loweredKeyword = keyword.toLowerCase();
  const index = loweredText.indexOf(loweredKeyword);

  if (index === -1 || keyword === '') { // 일치하지 않는 경우
    return <>{text}</>;
  }

  const beforeText = text.slice(0, index); //일치하는 단어전까지 문자열 추출
  const match = text.slice(index, index + keyword.length); // 일치 지점 ~ 검색어 기준까지 
  const afterText = text.slice(index + keyword.length); // 그 외

  return (
    <>
      <span>{beforeText}</span>
      <StyleHighlight>{match}</StyleHighlight>
      {afterText}
    </>
  )
}

const StyleHighlight = styled.span`
  background-color: yellow;
`;

