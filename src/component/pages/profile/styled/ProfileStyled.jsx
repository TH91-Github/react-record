import { colors, fonts } from 'component/styled/common/Variable';
import styled from 'styled-components';


export const Section = styled.div`
  padding:30px 0;
`;
export const SectionBox = styled.div`
  margin-top:30px;
  padding:0 30px;
`;

export const SkilsBox = styled.div`
  width:100%;
  height:100%;
  padding:10px;
  border-radius:5px;
  border:1px solid ${colors.lineColor};
`;

export const ProjectBox = styled.div`
  height:100%;
  padding:10px;
  border-radius:5px;
  border:1px solid ${colors.lineColor};
`;
export const ProjectTit = styled.p`
  font-size:${fonts.size18};
  font-family:${fonts.fontB};
`;
export const Company = styled.p`
  margin-top:15px;
`;
export const DateBox = styled.div`
  display:flex;
  margin-top:10px;
  font-size:${fonts.size14}px;
  color:${colors.subTextColor};
  .start{
    position:relative;
    padding-right:20px;
    &::after{ 
      position: absolute;
      top: 50%;
      right: 0;
      width: 15px;
      height: 15px;
      transform: translateY(-50%);
      line-height: 1;
      content: "~";
    }
  }
`;
export const MemberBox = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  .participation {
    position:relative;
    margin-left: 10px;
    padding-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 90%;
      background: ${colors.lineColor};
      transform: translateY(-50%);
      content: "";
    }
  }
`;
export const DescUl = styled.ul`
  margin-top:10px;
  & p {
    font-size:14px;
    line-height:19px;
    color:${colors.textColor};
  }
`;
export const ComaSpan = styled.span`
  display:inline-block;
  font-size:${fonts.size14}px;
  color: ${colors.subTextColor};
  &::before {
    content:",";
  }
  &:first-child {
    &::before {
      display:none;
    }
  }
`;