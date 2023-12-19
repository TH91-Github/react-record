import { useEffect, useState } from "react";
import styled from "styled-components";
import { routerData } from "routes/reRouterData";
import { colors, media, transitions } from "assets/styles/Variable";
import { TextCase } from "utils/textChk";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { SvgCode, SvgGuide, SvgProfile, SvgRecord } from "assets/styles/SvgPath";
import { useSelector } from "react-redux";
import { targetScroll } from "utils/common";

function BlogMainVisual(){
  const isMobile = useSelector((state) => state.mobileChk);
  const [exceptionH, setExceptionH] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const visualList = routerData.filter((item)=> item.title);
  const colorsArr  = [colors.green,colors.yellow,colors.blue,colors.red];
  
  useEffect(()=>{
    const headerH = document.querySelector('.header').clientHeight;
    setExceptionH(headerH)
  },[]);
  const itemClick = (idx) => { // 리스트 클릭
    if(isMobile){
      idTargetScroll(idx);
    }
    setActiveIdx(idx);
  }
  const idTargetScroll = (idx) => {
    const targetId = document.getElementById(`b-${visualList[idx].path}`);
    console.log(targetId)
    targetScroll(targetId);
  }

  return (
    <BlogWrap $headerH={exceptionH} id="b-visual" className="visual">
      <VisualInner className="visual__inner">
        <VisualInfo className="visual__info">
          <VisualTextBox className="visual__info__box">
            <p className="visual-tit">TEXT, TEXT</p>
            <p className="visual-tit">TEXT, TEXT </p>
            <p className="visual-tit">TEXT, TEXT </p>
          </VisualTextBox>
        </VisualInfo>
        <VisualCategory className="visual__category" >
          <VisualCategoryLists className="visual__lists">
            {
              visualList.map((item, idx) => (
                <VisualCategoryItem 
                  onClick={() => itemClick(idx) }
                  key={idx} 
                  className={`visual__item ${activeIdx === idx ? 'active' :''}`}>
                  <VisualCategoryBtn className="visual__item-btn">
                    <VisualCategoryIcon $bg={colorsArr[idx]} className="icon">
                      <CategoryIcon>
                        {idx === 0 && <SvgProfile $fillColor="#fff"/> }
                        {idx === 1 && <SvgGuide $fillColor="#fff"/> }
                        {idx === 2 && <SvgRecord $fillColor="#fff"/> }
                        {idx === 3 && <SvgCode $fillColor="#fff"/> }
                      </CategoryIcon>
                    </VisualCategoryIcon>
                    <VisualCategoryBox className="txt">
                      <VisualCategoryTxt $delay={idx+1} $color={colorsArr[idx]}>
                        <VisualCategoryKr className="tit-kr">{item.title}</VisualCategoryKr>
                        <VisualCategoryEn className="tit-en">{TextCase(item.path)}</VisualCategoryEn>
                      </VisualCategoryTxt>
                    </VisualCategoryBox>
                  </VisualCategoryBtn>
                </VisualCategoryItem>
              ))
            }
          </VisualCategoryLists>
        </VisualCategory>
        <VisualMove className="visual__move">
            {/* 바뀌는 텍스트 */}
            <p>{visualList[activeIdx].title} 미리보기 <SC.MotionLR>👉</SC.MotionLR></p>
            <VisualMoveBtn 
              onClick={() => idTargetScroll(activeIdx)} 
              $hoverColor={colorsArr[activeIdx]}
              className="visual__move-btn">
              <VisualMoveText className="text">
                <span className="before">Click</span>
                <span className="blind">또는</span>
                <span className="after">Scroll</span>
                <span className="blind">하여 아래 내용 확인하기</span>
              </VisualMoveText> 
            </VisualMoveBtn>
        </VisualMove>
      </VisualInner>
    </BlogWrap>
  )
}
export default BlogMainVisual;

const BlogWrap = styled.div`
  position:relative;
  width:100%;
  ${props => 
    props.$headerH 
      ? `height: calc(100vh - ${props.$headerH}px)`
      : 'height: 100vh'
  };
  min-height:600px;
  border:1px solid green;
  opacity:0;
  &.on {
    opacity:1;
      .visual__info__box {
        & > p {
          &:nth-child(1){
            ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
          }
          &:nth-child(2){
            ${SC.animation(SC.fadeIn, 1, 'ease', .4)}
          }
          &:nth-child(3){
            ${SC.animation(SC.fadeIn, 1, 'ease', .5)}
          }
        }
      }
      .visual__item {
        &:nth-child(1){
          ${SC.animation(SC.fadeIn('-x', 100), 1, 'ease', .5)}
        }
        &:nth-child(2){
          ${SC.animation(SC.fadeIn('-x', 100), 1, 'ease', .4)}
        }
        &:nth-child(3){
          ${SC.animation(SC.fadeIn('-x', 100), 1, 'ease', .3)}
        }
        &:nth-child(4){
          ${SC.animation(SC.fadeIn('-x', 100), 1, 'ease', .2)}
        }
      }
      .visual__move {
        ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
      }
  }
  ${media.mo} {
    min-height:560px;
    &.on {
      .visual__info__box {
        & > p {
          &:nth-child(1){
            ${SC.animation(SC.fadeIn('-x'), 1, 'ease', .3)}
          }
          &:nth-child(2){
            ${SC.animation(SC.fadeIn('-x'), 1, 'ease', .4)}
          }
          &:nth-child(3){
            ${SC.animation(SC.fadeIn('-x'), 1, 'ease', .5)}
          }
        }
      }
      .visual__info__box {
        & > p {
          &:nth-child(1){
            animation-play-state:running;
          }
          &:nth-child(2){
            animation-play-state:running;
          }
          &:nth-child(3){
            animation-play-state:running;
          }
        }
      }
      .visual__item {
        &:nth-child(1){
          ${SC.animation(SC.fadeIn, 1.5, 'ease', .4)}
        }
        &:nth-child(2){
          ${SC.animation(SC.fadeIn, 1.5, 'ease', .5)}
        }
        &:nth-child(3){
          ${SC.animation(SC.fadeIn, 1.5, 'ease', .6)}
        }
        &:nth-child(4){
          ${SC.animation(SC.fadeIn, 1.5, 'ease', .7)}
        }
      }
    }
  }
`;
const VisualInner = styled(SC.InnerStyle)`
  display:flex;
  position:relative;
  height:100%;
  ${media.mo} {
    flex-direction: column;
  }
`;
const VisualInfo = styled.div`
  position:relative;
  width:30%;
  height:100%;
  ${media.tab}{
    width:50%;
  }
  ${media.mo} {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:35%;
  }
`;
const VisualTextBox = styled.div`
  position:relative;
  top:50%;
  width:100%;
  transform: translateY(-120%);
  & > p {
    font-size:clamp(32px, 9.6vw, 48px);
    font-weight:800;
  }
  ${media.mo} {
    top:0;
    transform: none;
    text-align:center;
  }
`;

const VisualCategory = styled.div`
  width:70%;
  height:100%;
  ${media.tab}{
    width:50%;
  }
  ${media.mo} {
    display:flex;
    align-items:center;
    width:100%;
    height:65%;
  }
`;
const VisualCategoryLists = styled.div`
  display:flex;
  gap:20px;
  height:100%;
  ${media.tab}{
    gap:10px;
  }
  ${media.mo} {
    flex-wrap: wrap;
    max-width: 400px;
    margin:0 auto;
    height:auto;
  }
`;
const VisualCategoryItem = styled.div`
  position:relative;
  width:calc((50% - 60px) / 3);
  height:100%;
  transition:${transitions.base};
  ${media.pc}{
    &.active {
      width:50%;
      .tit-kr {
        display:inline-block;
        font-size:24px;
      }
      .tit-en {
        display:inline-block;
        margin-left:5px;
        font-size:16px;
      }
    }
  }
  ${media.tab}{
    width:calc((50% - 30px) / 3);
  }
  ${media.mo}{
    width:calc((100% - 20px) / 2);
    height:auto;
  }
`;

const VisualCategoryBtn = styled(SC.Button)`
  position:relative;
  width:100%;
  height:100%;
  &::after {
    display:block;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 65%,rgba(0,0,0,0.62) 99%,rgba(0,0,0,0.65) 100%);
    pointer-events : none;
    content:"";
  }
  ${media.mo}{
    height:auto;
    padding:25px 20px;
    border-radius:20px;
    background:rgba(255,255,255,.7);
    box-shadow:1px 2px 5px rgba(0, 0, 0, 0.1);
    &::after {
      display:none;
    }
  }
`;
const VisualCategoryIcon = styled.span`
  display:inline-block;
  overflow:hidden;
  position:relative;
  ${media.mo}{
    width:clamp(30px, 50% ,60px);
    padding-bottom: clamp(30px, 50% ,60px);
    margin:0 auto;
    background:${props => props.$bg || '#fff'};
    border-radius:50%;
    &::before {
      display:block;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: linear-gradient(135deg,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      opacity: 0.4;
      pointer-events:none;
      content:"";
    }
    &::after{
      display:block;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: linear-gradient(150deg,  rgba(0,0,0,0) 63%,rgba(0,0,0,0.65) 100%,rgba(0,0,0,0.65) 100%);
      opacity: 0.4;
      pointer-events:none;
      content:"";
    }
  }
`;
const CategoryIcon = styled(SC.Icon)`
  position:absolute;
  top:50%;
  left:50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
`;

const VisualCategoryBox = styled.div`
  position:absolute;
  z-index:2;
  bottom:0;
  width:100%;
  height:25%;
  padding:30px;
  text-align:left;
  ${media.tab}{
    padding:30px 10px;
  }
  ${media.mo}{
    overflow:hidden;
    position:relative;
    bottom:auto;
    margin-top:10px;
    padding:1px;
    height:22px;
    text-align:center;
    line-height:20px;
  }
`;
const VisualCategoryTxt = styled.div`
  display:block;
  color: #fff;
  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${media.mo}{
    color: ${props => props.$color || '#fff'};
    animation : textAni 5s ease
    ${props => 
      props.$delay
      ? `${(props.$delay*0.2)+1}s`
      : '1s'
    }
    infinite;
    @keyframes textAni {
      0%, 100%{ transform: translateY(0) }
      20%{transform: translateY(0)}
      40%{transform: translateY(-20px)}
      60%{transform: translateY(-20px)}
      80%{ transform: translateY(-20px)}
    }
  }
`;
const VisualCategoryKr = styled.span`
  display:block;
  font-size:14px;
  color:inherit;
  transition:${transitions.base};
  ${media.pc}{
    text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);
  }
  ${media.mo}{
    font-size:16px;
    color:${colors.textColor};
  }
`;
const VisualCategoryEn = styled.span`
  display:block;
  font-size:13px;
  color:inherit;
  transition:${transitions.base};
  ${media.mo}{
    font-size:16px;
  }
`;

const VisualMove = styled.div`
  position:absolute;
  z-index:5;
  bottom:30%;
  width:calc(30% - 15px);
  margin-top:50px;
  text-align:center;
  ${media.mo}{
    display:none;
  }
`;
const VisualMoveBtn = styled(SC.Button)`
  overflow:hidden;
  position:absolute;
  top:50%;
  left:100%;
  width:80px;
  height:80px;
  background:${colors.bgGreen};
  font-size:24px;
  font-weight:600;
  color:#fff;
  transform: translate(-50%, -50%);
  &::before {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:${props => props.$hoverColor || colors.baseBlack};
    transition: ${transitions.base};
    transform: translateX(-105%);
    content:"";
  }
  &:hover {
    &::before {
      transform: translateX(0);
    }
    .text {
      transform: translateX(0);
    }
  }
  &::after {
    position:absolute;
    top:50%;
    left:50%;
    width:90%;
    height:90%;
    border:1px solid #fff;
    transform:translate(-50%, -50%);
    content:"";
  }
`; 
const VisualMoveText = styled.span`
  display:flex;
  position:relative;
  z-index:2;
  width:200%;
  text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);
  &>span{
    display:block;
    width:100%;
  }
  transition:${transitions.base};
  transform: translateX(-50%);
`;