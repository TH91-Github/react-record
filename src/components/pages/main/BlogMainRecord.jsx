import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";

const pointColor = colors.blue;

function BlogMainRecord(){
  return (
    <BlogWrap id="b-record">
      <SC.InnerStyle>
        <SC.TitleBox>
          <SC.Title className="tit">
            <CartegoryTit>Record</CartegoryTit> - JS, React, CSS 등 설명
          </SC.Title>
          <SC.SubTxt className="txt">
            React, JS, CSS 등 간단한 설명과 함께 코드로 설명을 합니다.
          </SC.SubTxt>
        </SC.TitleBox>
        <SC.BtnArticle $justifyConent="center">
            <S.BlogLinkBtn $hoverBg={colors.blue}>
              <span>
                <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
                Record
              </span> 
            </S.BlogLinkBtn>
          </SC.BtnArticle>
      </SC.InnerStyle>
    </BlogWrap>
  )
}

export default BlogMainRecord;


const BlogWrap = styled.div`
  padding:50px 0;
  border:1px solid pink;
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;