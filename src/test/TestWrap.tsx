// ✅ TestPage.jsx -> Parent Component
import styled from 'styled-components';
import { Tistory } from './Tistory';


export const TestWrap = () => {
 
  return (
    <StyleWrap>
      <Tistory />
    </StyleWrap>
  );
}

const StyleWrap = styled.div`
  .Tistory{
    width:500px;
    margin:50px auto;
    padding:30px;
    border:1px solid #dbdbdb;
  }

`;