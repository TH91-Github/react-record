import * as S from "component/styled/common/AllStyled";
import { breakpoints, colors, fonts, media } from 'component/styled/common/Variable';
import styled from 'styled-components';

export const GuideBoxInner = styled.div`
  width:100%;
  max-width:${breakpoints.table}px;
  margin:10px auto 0;
  padding: 0 30px;
`;

export const GuideTitle = styled.div`
  padding: 15px 20px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-left: 5px solid ${colors.green3cb062};
  background: ${colors.bgWhite};
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

export const GuideTxt = styled.p`
  font-size:${fonts.size14};
  color:${colors.textColor};
`;

export const GuideTxtBar = styled(S.BarTxt)`
  margin-top:8px;
  font-size:${fonts.size14}px;
  &:first-child{
    margin-top:0;
  }
`;
const colorGap = ["20px","15px"];
export const ColorList = styled(S.UlFlex)`
  gap:${colorGap[0]};
  &>li {
    width:112.25px;
  }
  ${media.mo} {
    gap:${colorGap[1]};
    &>li {
      width: calc((100% - ${colorGap[1]} * 2) / 3);
    }
  }
  ${media.onlyMo} {
    &>li {
      width:100%
    }
  }
`;

export const ColorBtn = styled(S.Button)`
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

export const BreakpointList = styled(S.UlFlex)`
  gap:20px;
`;
export const BreakpointBtn = styled(S.Button)`
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

const fontGap = ["20px","15px","10px"]
export const FontList = styled(S.UlFlex)`
  gap:${fontGap[0]};
  ${media.mo} {
    gap:${colorGap[1]};
    &>li {
      width: calc((100% - ${colorGap[1]} * 2) / 3);
    }
  }
  ${media.onlyMo} {
    gap:${fontGap[2]};
    &>li {
      width:100%;
    }
  }
`;

export const FontBtn = styled(S.Button)`
  width:100%;
  padding: 5px 10px;
  border: 1px solid ${colors.lineColor};
  transition: all 0.3s;
  &:hover{
    border-color:${colors.green3cb062};
    background:${colors.green3cb062};
    color:${colors.baseWhite};
  }
  p {
    word-break: break-word;
  }
`;