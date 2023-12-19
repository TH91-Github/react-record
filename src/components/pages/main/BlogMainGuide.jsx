import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";
function BlogMainGuide(){
  return (
    <BlogWrap id="b-guide">
      <SC.InnerStyle>
        <SC.TitleBox>
          <SC.Title className="tit">
            <strong>Guide</strong> - Style, Component 등
          </SC.Title>
          <SC.SubTxt className="txt">
            Color, Font, BreakPoint, Tab, Slide 등 스타일과 컴포넌트<br className="pc-br" /> 가이드를 만들어 재사용에 편함을 제공
          </SC.SubTxt>
        </SC.TitleBox>
        <S.BtnArticle>
          <S.BlogLinkBtn $hoverBg={colors.yellow}>
            <span>
              <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
              Profile
            </span> 
          </S.BlogLinkBtn>
        </S.BtnArticle>
      </SC.InnerStyle>
    </BlogWrap>
  )
}

export default BlogMainGuide;


const BlogWrap = styled.div`
  padding:50px 0;
  border:1px solid blue;
`;



