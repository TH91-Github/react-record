import * as SC from "component/styled/common/AllStyled";
import { colors, fonts, media } from 'component/styled/common/Variable';
import styled from 'styled-components';

export const GuideSearch = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  padding:30px 0;
`;
export const GuideSearchInner = styled.div`
  position:relative;
  width:300px;
`;
export const GuideLineWrap = styled(SC.LineBox)`
  padding-top:30px;
`;

export const GuidDetailWrap = styled.div`
  margin-top:30px;
`;
export const GuideTitle = styled(SC.LineTitle)`
  padding: 15px 20px;
`;
export const GuideCont = styled.div`
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${colors.lineColor};
  .guide__info {
    &__desc {
      margin-top:15px;
    }
  }
  .guide__list {
    margin-top:20px;
  }
`;

const guideListGap = 20;
export const GuideListWrap = styled(SC.UlFlex)`
  gap:${guideListGap}px;
`;

export const GuideList = styled.li`
  position:relative;
  width: calc((100% - ${guideListGap}px)/2);
  &>div {
    height:100%;
  }
  ${media.mo}{
    width: 100%;
    
  }
`
export const GuideListBtn = styled(SC.Button)`
  display:flex;
  align-items:center;
  position:relative;
  width:100%;
  height:100%;
  padding:15px 20px;
  text-align:left;
  ${media.mo} {
    display:block;
    padding:10px;
    .title-wrap {display:block;}
  }
  &::before, &::after {
    position:absolute;
    bottom:0;
    right:0;
    background:${colors.yellow};
    content:"";
  }
  &::before {
    width:15px;
    height:2px;
    transform:translateX(25%);
  }
  &::after {
    width:2px;
    height:15px;
    transform:translateY(25%);
  }
`;

export const GuideListText = styled(SC.TextSub)`
  margin-left:20px;
  ${media.mo} {
    margin:8px 0 0 0;
    font-size:12px;
  }
`;

export const GuideTxtBar = styled(SC.BarTxt)`
  margin-top:8px;
  font-size:${fonts.size14}px;
  &:first-child{
    margin-top:0;
  }
`;
const _colorGap = ["20px","15px"];
export const ColorList = styled(SC.UlFlex)`
  gap:${_colorGap[0]};
  &>li {
    width:112.25px;
  }
  ${media.mo} {
    gap:${_colorGap[1]};
    &>li {
      width: calc((100% - ${_colorGap[1]} * 2) / 3);
    }
  }
  ${media.onlyMo} {
    &>li {
      width:100%
    }
  }
`;

export const ColorBtn = styled(SC.Button)`
  width:100%;
  border:1px solid ${colors.lineColor};
  background:${props => props.$colorCode || colors.bgWhite};
  .bg {
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100px;
  }
  .code {
    display: inline-block;
    padding: 3px;
    font-size: ${fonts.size14}px;
    font-weight: 600;
    background: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    color: ${colors.subBlack};
    transition: all 0.3s;
  }
  .info {
    display:block;
    padding:10px;
    border-top:1px solid ${colors.lineColor};
    background:${colors.baseWhite};
  }
  .val{
    font-size:${fonts.size14}px;
  }
  &:hover {
    .code {
      background:${colors.baseBlack};
      color:${colors.baseWhite};
    }
  }
`;

export const BreakpointList = styled(SC.UlFlex)`
  gap:20px;
`;
export const BreakpointBtn = styled(SC.Button)`
  text-align:center;
  .screen {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 60px;
    height: 60px;
    border-left: 1px solid #b4b4b4;
    border-right: 1px solid #b4b4b4;
    text-align: center;
    &::before {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background: #262626;
      transform: translateY(-50%);
      content: "";
    }
    .val {
      position: relative;
      z-index: 1;
      background: rgba(255, 255, 255, 0.8);
    }
  }
`; 

const _fontGap = ["20px","15px","10px"]
export const FontList = styled(SC.UlFlex)`
  gap:${_fontGap[0]};
  ${media.mo} {
    gap:${_colorGap[1]};
    &>li {
      width: calc((100% - ${_colorGap[1]} * 2) / 3);
    }
  }
  ${media.onlyMo} {
    gap:${_fontGap[2]};
    &>li {
      width:100%;
    }
  }
`;

export const FontBtn = styled(SC.Button)`
  width:100%;
  padding: 5px 10px;
  border: 1px solid ${colors.lineColor};
  transition: all 0.3s;
  &:hover{
    border-color:${colors.green};
    background:${colors.green};
    color:${colors.baseWhite};
  }
  p {
    word-break: break-word;
  }
`;

// 설명 영역
export const GuideTest = styled.div`
  margin-top:15px;
  padding-top:15px;
  border-top:2px solid ${colors.lineColor};
  &:first-child {
    margin-top:0;
    border-top:2px solid ${colors.baseBlack};
  }
`;
export const GuideTestTxt = styled.div`
  margin-top:5px;
  font-size:${fonts.size14}px;
`;
export const GuideTestBox = styled.div`
  position:relative;
  margin:10px auto;
`;