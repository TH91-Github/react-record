import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors, media } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";

const pointColor = colors.yellow;
const colorPalette = ["#FEF1AB","#FFE070", "#FCBD47", "#FDCA2D","#F5B800"];
 
function BlogMainGuide(){
  console.log(colorPalette)
  return (
    <BlogWrap id="b-guide">
      <SC.InnerStyle>
        <GuideTextBox className="guide__text__box">
          <SC.TitleBox>
            <SC.Title className="tit ani-ini">
              <CartegoryTit>Guide</CartegoryTit> - Style, Component 등
            </SC.Title>
            <SC.SubTxt className="txt ani-ini">
              Color, Font, BreakPoint, Tab, Slide 등 스타일과 컴포넌트<br className="pc-br" /> 가이드를 만들어 재사용에 편함을 제공
            </SC.SubTxt>
          </SC.TitleBox>
          <SC.BtnArticle $justifyConent="center">
            <S.BlogLinkBtn $hoverBg={colors.yellow} className="link-btn ani-ini">
              <span>
                <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
                Guide
              </span> 
            </S.BlogLinkBtn>
          </SC.BtnArticle>
        </GuideTextBox>
        <GuideVisual className="guide__visual">
          <GuideColors className="guide__colors">
            {
              colorPalette.map((item, idx) => (
                <ColorsItem 
                  $marginTop={idx}
                  $bg={item}
                  className="guide__colors-item ani-ini" 
                  key={idx}>
                  <ColorsCode>
                    <span>{item}</span>
                  </ColorsCode> 
                </ColorsItem>   
              ))
            }
          </GuideColors>
          <div>
            <Colordesc className="guide__colors-notice ani-ini"> EX) colors.yellow : {pointColor} &#8251; </Colordesc>
          </div>
        </GuideVisual>
      </SC.InnerStyle>
    </BlogWrap>
  )
}
export default BlogMainGuide;

const BlogWrap = styled.div`
  padding:50px 0;
  &.on {
    .guide__text__box {
      .tit {
        ${SC.animation(SC.fadeIn, 1, 'ease', .1)}
      }
      .txt {
        ${SC.animation(SC.fadeIn, 1, 'ease', .2)}
      }
      .link-btn {
        ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
      }
    }
    .guide__colors-item{
      &:nth-child(1){
        ${SC.animation(SC.fadeIn, 1, 'ease', .1)}
      }
      &:nth-child(2){
        ${SC.animation(SC.fadeIn, 1.1, 'ease', .2)}
      }
      &:nth-child(3){
        ${SC.animation(SC.fadeIn, 1.2, 'ease', .3)}
      }
      &:nth-child(4){
        ${SC.animation(SC.fadeIn, 1.3, 'ease', .4)}
      }
      &:nth-child(5){
        ${SC.animation(SC.fadeIn, 1.4, 'ease', .5)}
      }
    }
    .guide__colors-notice {
      ${SC.animation(SC.fadeIn, 1.4, 'ease', .6)}
    }
  }
`;
const GuideTextBox = styled.div`
  position:relative;
  z-index:2;
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;

const GuideVisual = styled.div`
  text-align:center;
`;
const GuideColors = styled.div`
  display:inline-block;
  width:100%;
  max-width:450px;
  position:relative;
  z-index:1;
  margin-top:30px;
  padding-top:50px;
`;

const ColorsItem = styled.div`
  width:100%;
  height:100px;
  margin-top: -50px;
  padding:10px;
  background:${props => props.$bg || colors.baseWhite};
  border-radius:10px;
  box-shadow:0px -10px 15px rgba(0, 0, 0, 0.2);
  &:first-child {
    box-shadow:0px 0px 15px rgba(0, 0, 0, 0.2);
  }
  color:${colors.textColor};
  ${media.mo}{
    box-shadow:0px -10px 15px rgba(0, 0, 0, 0.2);
    &:first-child {
      box-shadow:0px 0px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;
const ColorsCode = styled.p`
  font-size:12px;
  text-align:left;
  &>span{ 
    display:inline-block;
    padding:3px 5px;
    border-radius:3px;
    background: rgba(255,255,255,.7);
  }
`;

const Colordesc = styled.p`
  ${SC.notice}
  margin-top:5px;
  font-size:12px;
  color:${colors.subTextColor};
`;