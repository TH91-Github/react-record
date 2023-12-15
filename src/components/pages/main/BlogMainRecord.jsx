import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";

function BlogMainRecord(){
  return (
    <MainGuideWrap>
      <MainInner>
      BlogMainRecord 입니다  
      </MainInner>
    </MainGuideWrap>
  )
}

export default BlogMainRecord;


const MainGuideWrap = styled.div`
  height:100vh;
  border:1px solid pink;
`;

const MainInner = styled(SC.InnerStyle)`

`;

