import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";

function BlogMainProfile(){
  return (
    <MainGuideWrap>
      <MainInner>
      BlogMainProfile 입니다  
      </MainInner>
    </MainGuideWrap>
  )
}

export default BlogMainProfile;


const MainGuideWrap = styled.div`
  height:100vh;
  border:1px solid yellow;
`;

const MainInner = styled(SC.InnerStyle)`

`;

