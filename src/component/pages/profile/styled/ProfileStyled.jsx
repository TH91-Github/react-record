import { colors } from 'component/styled/common/Variable';
import styled from 'styled-components';


export const Section = styled.div`
  padding:30px 0;
`;
export const SectionBox = styled.div`
  margin-top:30px;
  padding:0 30px;
`;

export const SkilsLi = styled.li`
  position:relative;
`;

export const SkilsBox = styled.div`
  width:100%;
  height:100%;
  padding:10px;
  border-radius:5px;
  border:1px solid ${colors.lineColor};
`;
export const DescUl = styled.ul`
  margin-top:10px;
  & p {
    font-size:14px;
    line-height:19px;
    color:${colors.textColor};
  }
`;
