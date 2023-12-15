import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";

function BlogMainGuide(){
  return (
    <MainGuideWrap>
      <MainInner>
        Guide 입니다  
      </MainInner>
    </MainGuideWrap>
  )
}

export default BlogMainGuide;


const MainGuideWrap = styled.div`
  height:100vh;
  border:1px solid blue;
`;

const MainInner = styled(SC.InnerStyle)`

`;

