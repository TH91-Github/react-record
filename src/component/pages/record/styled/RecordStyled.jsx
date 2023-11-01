// import * as S from "component/styled/common/AllStyled";
// import { breakpoints, colors, fonts, media } from 'component/styled/common/Variable';
import styled from 'styled-components';

export const RecordSearch = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  padding:30px 0;
`;
export const RecordSearchInner = styled.div`
  position:relative;
  width:300px;
`;

export const RecordCont = styled.div`
  margin-top:30px;
  .record__list {
    margin-top:15px;
    padding-top:15px;
  }
`;

export const RecordList = styled.ul`
  display:flex;
  flex-direction: column;
  gap:15px;
`;