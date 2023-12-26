import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";

const pointColor = colors.red;

function BlogMainETC(){
  
  return (
    <BlogWrap id="b-etc">
      <SC.InnerStyle>
        <SC.TitleBox>
          <SC.Title className="tit">
            <CartegoryTit>E.T.C</CartegoryTit> - Style, Component 등
          </SC.Title>
          <SC.SubTxt className="txt">
            React, JS 등 간단한 예제, 샘플용을 만들어 테스트 및 기능 구현 설명을 샘플을 보여주어 이해를 돕기 위한 화면
          </SC.SubTxt>
        </SC.TitleBox>
        <SC.BtnArticle $justifyConent="center">
          <S.BlogLinkBtn $hoverBg={pointColor}>
            <span>
              <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
              ETC
            </span> 
          </S.BlogLinkBtn>
        </SC.BtnArticle>
      </SC.InnerStyle>
    </BlogWrap>
  )
}

export default BlogMainETC;

const BlogWrap = styled.div`
  padding:100px 0;
  border:1px solid green;
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;

