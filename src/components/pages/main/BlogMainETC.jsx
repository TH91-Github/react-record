import styled, { keyframes } from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors, media } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";

const pointColor = colors.red;
function BlogMainETC(){
  return (
    <BlogWrap id="b-etc">
      <SC.InnerStyle>
        <div className="etc__text__box">
          <SC.TitleBox>
            <SC.Title className="tit ani-ini">
              <CartegoryTit>E.T.C</CartegoryTit> - Style, Component 등
            </SC.Title>
            <SC.SubTxt className="txt ani-ini">
              React, JS 등 간단한 예제, 샘플용을 만들어 테스트 및 기능 구현 설명을 샘플을 보여주어 이해를 돕기 위한 화면
            </SC.SubTxt>
          </SC.TitleBox>
          <SC.BtnArticle $justifyConent="center">
            <S.BlogLinkBtn to={'/etc'} $hoverBg={pointColor} className="link-btn ani-ini">
              <span>
                <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
                ETC
              </span> 
            </S.BlogLinkBtn>
          </SC.BtnArticle>
        </div>
        <EtcVisual className="etc__effect ani-ini">
          <EtcItem className="effect-1">
            <LineWrap>
                <LineTit><span>SAMPLE</span></LineTit>
              </LineWrap>
          </EtcItem>
          <EtcItem className="effect-2">
            <Water className="water"><Drop className="waterdrop" /></Water>
            <Water className="water"><Drop className="waterdrop" /></Water>
            <Water className="water"><Drop className="waterdrop" /></Water>
          </EtcItem>
          <EtcItem className="effect-3">
            <SampleLayout className="sample__layout">
              {
                Array(11).fill('-').map((item,idx) => 
                  <LayoutItem 
                    $delay={idx}
                    className="layout-item" 
                    key={idx}>
                    {item}
                  </LayoutItem>
                )
              }
            </SampleLayout>
          </EtcItem>
          <EtcItem className="effect-4">
            <SampleBar>
              {
                Array(3).fill('').map((item,idx) => 
                  <BarItem 
                    $delay={idx}
                    key={idx}>
                    {item}
                  </BarItem>
                )
              }
            </SampleBar>
          </EtcItem>
        </EtcVisual>
      </SC.InnerStyle>
    </BlogWrap>
  )
}

export default BlogMainETC;

const BlogWrap = styled.div`
  overflow:hidden;
  padding:100px 0;
  &.on {
    .etc__text__box {
      .tit {
        ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
      }
      .txt {
        ${SC.animation(SC.fadeIn, 1, 'ease', .4)}
      }
      .link-btn {
        ${SC.animation(SC.fadeIn, 1, 'ease', .5)}
      }
    }
    .etc__effect {
      ${SC.animation(SC.fadeIn, 1, 'ease', .6)}
    }
  }
  ${media.mo}{
    padding: 50px 0;
  }
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;
const EtcVisual = styled.div`
  position:relative;
  margin-top:30px;
  height:250px;
`;
const EtcItem = styled.div`
  overflow:hidden;
  position:absolute;
  top:50%;
  left:50%;
  width:200px;
  height:100%;
  border-radius:10px;
  background:rgba(255,255,255,.9);
  box-shadow:0px 5px 15px rgba(0, 0, 0, 0.2);
  &.effect-1 {
    z-index:2;
    transform: translate(-50%, -50%);
    animation: moving1 10s 2.5s infinite;
  }
  &.effect-2 {
    transform: translate(-150%, -50%) scale(0.8);
    animation: moving2 10s 2.5s infinite;
  }
  &.effect-3 {
    transform: translate(-50%, -50%) scale(0.65);
    animation: moving3 10s 2.5s infinite;
  }
  &.effect-4 {
    transform: translate(50%, -50%) scale(0.8);
    animation: moving4 10s 2.5s infinite;
  }
  @keyframes moving1  {
    0%,100%{z-index:3; transform: translate(-50%, -50%);}
    25%{z-index:2;transform: translate(-150%, -50%) scale(0.8);}
    50%{z-index:1;transform: translate(-50%, -50%) scale(0.65);}
    75%{z-index:2;transform: translate(50%, -50%) scale(0.8);}
  }
  @keyframes moving2  {
    0%,100%{z-index:2;transform: translate(-150%, -50%) scale(0.8);}
    25%{z-index:1;transform: translate(-50%, -50%) scale(0.65);}
    50%{z-index:2;transform: translate(50%, -50%) scale(0.8);}
    75%{z-index:3;transform: translate(-50%, -50%);}
  }
  @keyframes moving3  {
    0%,100%{z-index:1;transform: translate(-50%, -50%) scale(0.65);}
    25%{z-index:2;transform: translate(50%, -50%) scale(0.8);}
    50%{z-index:3;transform: translate(-50%, -50%);}
    75%{z-index:2;transform: translate(-150%, -50%) scale(0.8);}
  }
  @keyframes moving4  {
    0%,100%{z-index:2;transform: translate(50%, -50%) scale(0.8);}
    25%{ z-index:3; transform: translate(-50%, -50%); }
    50%{z-index:2;transform: translate(-150%, -50%) scale(0.8);}
    75%{z-index:1;transform: translate(-50%, -50%) scale(0.65);}
  }
`;
// tit line
const LineWrap = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  padding:20px;
  transform: translate(-50%, -50%);
  &::before, &::after {
    position:absolute;
    width:100%;
    height:1px;
    background:${pointColor};
    content:"";
  }
  &::before{
    top:0;
    left:0;
    animation: lineTopAni 3s infinite;
  }
  &::after {
    bottom:0;
    right:0;
    animation: lineBottom 3s infinite;
  }
  @keyframes lineTopAni{
    0%{
      transform: translateX(-300%);
    }
    30%, 60%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(300%);
    }
  }
  @keyframes lineBottom{
    0%{
      transform: translateX(300%);
    }
    30%, 60%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-300%);
    }
  }
`;
const LineTit = styled.span`
  &>span{
    font-size:18px;
    font-weight:800;
    animation: lineText 3s infinite;
  }
  &::before, &::after{
    position:absolute;
    width:1px;
    height:100%;
    background:${pointColor};
    content:"";
  }
  &::before{
    top:0;
    left:0;
    animation: lineLeft 3s infinite;
  }
  &::after{
    bottom:0;
    right:0;
    animation: lineRight 3s infinite;
  }
  @keyframes lineText {
    0%{
      opacity:0;
    }
    35%,55%{
      opacity:1;
    }
    100%{
      opacity:0;
    }
  }
  @keyframes lineLeft{
    0%{
      transform: translateY(-300%);
    }
    30%, 60%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(300%);
    }
  }
  @keyframes lineRight{
    0%{
      transform: translateY(300%);
    }
    30%, 60%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(-300%);
    }
  }
`;
// 물방울

// keyframes
const effectAni = () => keyframes`
  0%{
    transform: scale(0);
    opacity:0.9;
  }
  100%{
    transform: scale(2);
    opacity:0;
  }
`;
const Water = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  width:50px;
  height:50px;
  transform: translate(-50%, 30%) scaleY(0.5);
  &:nth-child(2){
    transform: translate(-150%, -120%) scaleY(0.5);
    &::before{
      animation-delay:1.6s;
    }
    &::after{
      animation-delay:1.9s;
    }
    .waterdrop{
      &::before{
        animation-delay:2.2s;
      }
      &::after{
        animation-delay:1.5s;
      }
    }
  }
  &:nth-child(3){
    transform: translate(50%, -80%) scaleY(0.5);
    &::before{
      animation-delay:1.4s;
    }
    &::after{
      animation-delay:2s;
    }
    .waterdrop{
      &::before{
        animation-delay:2.6s;
      }
      &::after{
        animation-delay:1.4s;
      }
    }
  }
  &::before, &::after {
    position:absolute;
    top:50%;
    left:50%;
    width:50px;
    height:50px;
    margin:-25px 0 0 -25px;
    border:1px solid ${pointColor};
    border-radius:50%;
    background:transparent;
    animation: ${effectAni} 3s 1s infinite linear;
    opacity:0;
    content:'';
  }
  &::after {
    animation: ${effectAni} 3s 1.5s infinite linear;
  }
`;
const Drop = styled.span`
  position:absolute;
  z-index:5;
  top:50%;
  left:50%;
  width:50px;
  height:50px;
  margin:-25px 0 0 -25px;
  color:${pointColor};
  &::before, &::after {
    position:absolute;
    top:50%;
    left:50%;
    content:"";
  }
  &::before{
    position:absolute;
    width:50px;
    height:50px;
    margin:-25px 0 0 -25px;
    border:1px solid ${pointColor};
    border-radius:50%;
    background:transparent;
    animation: ${effectAni} 3s 2s infinite linear;
    opacity:0;
  }
  &::after{
    width:1px;
    height:50px;
    background:${pointColor};
    opacity:0;
    animation: dropAni 3s 1s infinite;
  }
  @keyframes dropAni {
    0%{
      opacity:1;
      transform: translateY(-100px);
    }
    15%,100%{
      height:0;
      opacity:0;
      transform: translateY(10px);
    }
  }
`;

// 샘플 레이아웃 
const SampleLayout = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:5px;
  position:absolute;
  top:50%;
  left:50%;
  width:90%;
  height:90%;
  padding:5px;
  transform: translate(-50%, -50%);
`;
const LayoutItem = styled.span`
  flex-grow:1;
  display:inline-block;
  border-radius:3px;
  padding:3px;    
  background: ${colors.bgGray};
  color: ${pointColor};
  animation: layoutAni 4s infinite;
  animation-delay:${props => props.$delay * 0.1 || 0}s;
  opacity:0;
  @keyframes layoutAni {
    0%{
      transform: translateY(400%);
      opacity:0;
    }
    30%, 60%{
      transform: translateY(0);
      opacity:1;
    }
    100%{
      opacity:0;
    }
  }
  &:first-child {
    width:100%;
    background: ${pointColor};
    color:${colors.baseWhite};
  }
  &:nth-child(2), &:nth-child(2) + span, &:last-child, &:nth-last-child(2){
    width:calc((100% - 5px)/2);
  }
  &:nth-last-child(3) {
    width:30%;
    background: ${pointColor};
    color:${colors.baseWhite};
  }
`;

const SampleBar = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  width:100px;
  height:100px;
  padding:5px;
  transform: translate(-50%, -50%);
  &::before {
    position:absolute;
    z-index:2;
    top:50%;
    left:50%;
    width:80%;
    height:10px;
    border-radius:10px;
    background:${colors.bgGray};
    transform: translate(-50%,-50%);
    content:"";
  }
  &::after{
    position:absolute;

  }
`;
const BarItem = styled.span`
  position:absolute;
  top:50%;
  left:50%;
  width:38px;
  height:38px;
  margin: -19px 0 0 -19px;
  border-radius:10px;
  background:${pointColor};
  animation: ball 3s linear infinite;
  animation-delay:${props => props.$delay || 0}s;
  opacity:0;
  @keyframes ball {
    0% {
      z-index:1;
      transform: rotate(0) translateY(-38px);
      opacity:1;
    }
    50% {
      z-index:1;
      transform: rotate(180deg) translateY(-30px);
      background:${colors.bgGray};
      opacity:1;
    }
    70%{
      z-index:3;
    }
    100% {
      z-index:3;
      transform: rotate(360deg) translateY(-38px);
      opacity:1;
    }
  }
`;