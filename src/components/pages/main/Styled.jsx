import * as SC from "assets/styles/StyledCm";
import { colors, media, transitions } from "assets/styles/Variable";
import styled from "styled-components";

export const MainGuideWrap = styled.div`
  padding:50px 0;
  border:1px solid pink;
`;

export const BtnArticle = styled.div`
  margin-top:${props => props.$marginTop || 30 }px;
  ${media.mo}{
    margin-top:${props => props.$marginTop || 20 }px;
  }
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
  svg {
    path {
      transition:${transitions.base};
    }
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
    background:${props => props.$hoverBg || colors.baseBlack };
    transition:${transitions.base};
    content:"";
  }
  &:hover, &:focus {
    border:3px solid ${props => props.$hoverBg || colors.baseBlack };
    text-shadow:0px 2px 2px rgba(219, 219, 219, .2);
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
  ${media.mo}{
    min-width:120px;
    padding:10px;  
    border-radius:5px;
    border-width: 2px;
    &>span {
      font-size: 14px;
    }
    &:hover, &:focus {
      border-width: 2px;
    }
  }
`;
export const BlogLinkIcon = styled.span`
  display:inline-block;
  width:20px;
  height:20px;
  margin-right:5px;
  ${media.mo}{
    width:16px;
    height:16px; 
  }
`;