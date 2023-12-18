import * as SC from "assets/styles/StyledCm";
import { colors, transitions } from "assets/styles/Variable";
import styled from "styled-components";

export const MainGuideWrap = styled.div`
  padding:50px 0;
  border:1px solid pink;
`;

export const TitleBox = styled.div`
  text-align: ${props => props.$align || 'center'};
  ${props => 
    `
    ${props.$align === "left" && `
      .tit {
        &::before, &::after{
          left:10px;
        }
      }
    `}
    ${props.$align === "right" && `
      .tit {
        &::before, &::after{
          left:auto;
          right:10px;
        }
      }
    `}
  `}
  
`;
export const Title = styled.h2`
  position:relative;
  padding-top:12px;
  font-size:24px;
  font-weight:500;
  & > strong { 
    font-weight:800;
  }
  &::before, &::after {
    position:absolute;
    top:0;
    left:50%;
    width:12px;
    height:12px;
    border-radius:50%;
    background:${colors.bgGreen};
    animation: ${SC.TitMark(-1)} 4s linear infinite;
    content:"";
  }
  &::after{
    background:${colors.yellow};
    animation: ${SC.TitMark(1)} 4s linear infinite;
  }
`;

export const Txt = styled.p`
  margin-top:8px;
  color:${colors.subTextColor};
  line-height:1.5;
`;

export const BtnArticle = styled.div`
  margin-top:${props => props.$marginTop || 30 }px;
`;  

export const BlogLinkBtn = styled(SC.Button)`
  overflow:hidden;
  position:relative;
  min-width:150px;
  padding:15px 10px;  
  border-radius:5px;
  border: 3px solid rgba(215,219,220,.3);
  background:${colors.bgWhite};
  box-shadow:0px 3px 5px rgba(219, 219, 219, 0.1);
  text-align:center;
  transition:${transitions.base};
  &>span {
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:2;
    font-size:16px;
    font-weight:600;
    color:${colors.textColor};
    transition:${transitions.base};
  }
  &::before, &::after {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;  
    pointer-events : none;
    content:"";
  }
  &::after{
    position:absolute;
    top:0;
    left:-110%;
    width:0;
    height:100%;
    background:${colors.yellow};
    transition:${transitions.base};
    content:"";
  }
  &:hover, &:focus {
    border:3px solid ${colors.yellow};
    text-shadow:0px 2px 2px rgba(0, 0, 0, .2);
    &::after{
      left:0;
      width:100%;
    }
    &>span {
      color:${colors.baseWhite};
    }
    svg {
      path {
        stroke:#fff;
      }
    }
  }
`;
export const BlogLinkIcon = styled.span`
  display:inline-block;
  width:20px;
  height:20px;
  margin-right:5px;
`;