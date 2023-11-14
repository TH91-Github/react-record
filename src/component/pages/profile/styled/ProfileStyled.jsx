import { colors, fonts } from 'component/styled/common/Variable';
import * as SC from "component/styled/common/AllStyled";
import styled from 'styled-components';
import profileImg from '../../../../assets/images/profile.jpg'

export const ProfileWrap = styled.div`
  position: relative;
  min-height: 300px;
  padding: 100px 30px 50px;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: #f5b800;
    content: "";
  }
  .profile{
    &__inner{
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 10px;
      background: ${colors.baseWhite};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    &__info{ 
      display: flex;
      flex-direction: column;
      padding: 75px 30px 30px;
      .name {
        margin-top: 30px;
        font-size: 24px;
        font-family:${fonts.fontB};
      }
    }
  }
`;
export const Contact = styled.div`
  margin-top: 20px;
  & > ul {
    display: flex;
    justify-content: center;
    &>li{
      position: relative;
      margin-left: 10px;
      padding-left: 10px;
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        width: 1px;
        height: 80%;
        background: #000;
        transform: translateY(-50%);
        content: "";
      }
      &:first-child {
        &::before {
          display:none;
        }
      }
    }
  }
  .txt {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    color: #000;
  }
  i {
    margin-right:5px;
  }
`;
export const ProfileImg = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 50%;
  width: 150px;
  height: 150px;
  background: url(${profileImg}) no-repeat 0 0;
  background-size: cover;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all .5s;
`;
export const LineWrap = styled(SC.LineBox)`
  margin-top:20px;
  padding-top:20px;
`;
export const SnsList = styled(SC.DivFlex)`
  margin-top:20px;
`;

// content
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
  &>li {
    margin-top:8px;
    &:first-child {
      margin-top:0;
    }
  }
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

export const PlanTit = styled.p`
  font-size:${fonts.size18}px;
  font-family:${fonts.fontB};
  text-align:center;
  & > span {
    display:inline-block;
    position:relative;
    &::before{
      position: absolute;
      right: 0;
      bottom: 0;
      width: 30%;
      height: 2px;
      background: ${colors.yellow};
      content: "";
    }
    &::after{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70%;
      height: 2px;
      background: ${colors.green};
      content: "";
    }
  }
`;
export const TextCenter = styled.p`
  font-size: ${props => props.fontSize || `${fonts.size}px`};
  font-weight: ${props => props.fontWeight || '550'};
  text-align: ${props => props.$align || 'left'};
  color: ${props => props.color || colors.textColor};
  line-height: ${props => props.$lineHeight || '1.5'};  
  text-align:center;
  & + p { 
    margin-top: 10px;
  }
`;
