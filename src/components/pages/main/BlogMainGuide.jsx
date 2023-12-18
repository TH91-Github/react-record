import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
function BlogMainGuide(){
  return (
    <MainGuideWrap>
      <SC.InnerStyle>
        <S.TitleBox>
          <S.Title className="tit">
            <strong>Guide</strong> - Style, Component 등
          </S.Title>
          <S.Txt className="txt">
            Color, Font, BreakPoint, Tab, Slide 등 스타일과 컴포넌트<br className="pc-br" /> 가이드를 만들어 가이드 기준에 맞게 사용을 하고 있습니다.
          </S.Txt>
        </S.TitleBox>
      </SC.InnerStyle>
    </MainGuideWrap>
  )
}

export default BlogMainGuide;


const MainGuideWrap = styled.div`
  padding:50px 0;
  border:1px solid blue;
`;



