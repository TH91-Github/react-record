import { Button } from "assets/styles/StyledCm";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Error () {
  const navi = useNavigate();
  return (
    <ErrorWrap>
      <ErrorBox>
        <ErrorTit>잘못된 경로입니다.</ErrorTit>
        <ErrorLink onClick={()=>navi('/')}>Main 👉 돌아가기</ErrorLink>
      </ErrorBox>
    </ErrorWrap>
  )
}
export default Error;

const ErrorWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
`;
const ErrorBox = styled.div`
  text-align:center;
`;
const ErrorTit = styled.p`
  font-size:24px;
  font-weight:700;
`;
const ErrorLink = styled(Button)`
  margin-top:20px;
  padding:5px 8px;
  border-radius:3px;
  background:#fff;
`;