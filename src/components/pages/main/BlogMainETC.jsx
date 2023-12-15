import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";

function BlogMainETC(){
  return (
    <MainGuideWrap>
      <MainInner>
        BlogMainETC 입니다  
      </MainInner>
    </MainGuideWrap>
  )
}

export default BlogMainETC;


const MainGuideWrap = styled.div`
  height:100vh;
  border:1px solid green;
`;

const MainInner = styled(SC.InnerStyle)`

`;

