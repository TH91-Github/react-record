import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { Svglink } from "assets/styles/SvgPath";
function BlogMainProfile(){
  return (
    <MainGuideWrap>
      <SC.InnerStyle>
        <div>
          <S.TitleBox $align="left">
            <S.Title className="tit">
              <strong>Profile</strong> - 소개 </S.Title>
            <S.Txt className="txt">
              소개, 프로젝트, 관련 스킬 등 
            </S.Txt>
          </S.TitleBox>
          <S.BtnArticle>
            <S.BlogLinkBtn>
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
    </MainGuideWrap>
  )
}

export default BlogMainProfile;

const MainGuideWrap = styled.div`
  padding:50px 0;
  border:1px solid yellow;
`;

