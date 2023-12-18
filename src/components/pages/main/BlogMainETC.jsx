import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
function BlogMainETC(){
  return (
    <MainGuideWrap>
      <SC.InnerStyle>
        BlogMainETC 입니다  
      </SC.InnerStyle>
    </MainGuideWrap>
  )
}

export default BlogMainETC;


const MainGuideWrap = styled.div`
  padding:50px 0;
  border:1px solid green;
`;


