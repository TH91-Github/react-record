import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { Svglink } from "assets/styles/SvgPath";
import { colors } from "assets/styles/Variable";
function BlogMainProfile(){
  return (
    <BlogWrap id="b-profile">
      <SC.InnerStyle>
        <div>
          <SC.TitleBox $align="left">
            <SC.Title className="tit">
              <strong>Profile</strong> - 소개 </SC.Title>
            <SC.SubTxt className="txt">
              소개, 프로젝트, 관련 스킬 등 
            </SC.SubTxt>
          </SC.TitleBox>
          <S.BtnArticle>
            <S.BlogLinkBtn $hoverBg={colors.green}>
              <span>
                <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
                Profile
              </span> 
            </S.BlogLinkBtn>
          </S.BtnArticle>
        </div>
        <div>

        </div>
      </SC.InnerStyle>
    </BlogWrap>
  )
}

export default BlogMainProfile;

const BlogWrap = styled.div`
  padding:50px 0;
  border:1px solid yellow;
`;

