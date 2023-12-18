import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
function BlogMainRecord(){
  return (
    <MainGuideWrap>
      <SC.InnerStyle>
      BlogMainRecord 입니다  
      </SC.InnerStyle>
    </MainGuideWrap>
  )
}

export default BlogMainRecord;


const MainGuideWrap = styled.div`
  padding:50px 0;
  border:1px solid pink;
`;

const MainInner = styled(SC.InnerStyle)`

`;

