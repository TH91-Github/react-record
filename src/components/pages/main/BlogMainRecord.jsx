import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors, media } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";
import { TextUpLow } from "utils/textChk";

const pointColor = colors.blue;
const RecordList = [
  {
    title:"React",
    background:"rgba(54,54,54,.9)",
  },
  {
    title:"JS",
    background:"#f7df1e",
  },
  {
    title:"HTML",
    background:"rgba(221,75,37,.9)",
  },
  {
    title:"SCSS",
    background:"rgba(218,89,152,.9)",
  },
  {
    title:"MEMO",
    background:"",
  },
];
function BlogMainRecord(){
  return (
    <BlogWrap id="b-record">
      <SC.InnerStyle>
        <RecordTextBox className="record__text__box ani-ini">
          <SC.TitleBox>
            <SC.Title className="tit ani-ini">
              <CartegoryTit>Record</CartegoryTit> - React, JS, SCSS 등 설명
            </SC.Title>
            <SC.SubTxt className="txt ani-ini">
              React, JS, CSS 등 간단한 설명과 함께 코드로 설명을 합니다.
            </SC.SubTxt>
          </SC.TitleBox>
          <SC.BtnArticle $justifyConent="center">
            <S.BlogLinkBtn $hoverBg={colors.blue} className="link-btn ani-ini">
              <span>
                <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
                Record
              </span> 
            </S.BlogLinkBtn>
          </SC.BtnArticle>
        </RecordTextBox>
        <RecordVisual className="record__visual">
          {/* React js css html */}
          {
            RecordList.map((item, idx) =>{
              return <RecordItem 
                $bg={item.background}
                className={`record__visual-item ${TextUpLow(item.title,"lower")}`}
                key={idx}>
                <div className="box ani-ini">
                  {item.title === "React" && (
                    <ItemImg>
                      <img src={process.env.PUBLIC_URL+'logo192.png'} alt="" />
                    </ItemImg>
                  )}
                  <span className="tit">{item.title}</span>
                </div>
              </RecordItem>
            })
          }
        </RecordVisual>
      </SC.InnerStyle>
    </BlogWrap>
  )
}

export default BlogMainRecord;

const BlogWrap = styled.div`
  overflow:hidden;
  position:relative;
  padding:250px 0;
  text-align:center;
  &.on {
    .record__text__box {
      ${SC.animation(SC.fadeIn, 1, 'ease', 1.5)}
      .tit {
        ${SC.animation(SC.fadeIn, 1, 'ease', 1.6)}
      }
      .txt {
        ${SC.animation(SC.fadeIn, 1, 'ease', 1.7)}
      }
      .link-btn {
        ${SC.animation(SC.fadeIn, 1, 'ease', 1.8)}
      }
    }
    .record__visual-item {
      &.react .box{
        ${SC.animation(SC.fadeIn('y',200), 1, 'ease', .7)}
      }
      &.js .box {
        ${SC.animation(SC.fadeIn('y',250), 1.1, 'ease', .7)}
      }
      &.html .box {
        ${SC.animation(SC.fadeIn('y',200), 1, 'ease', .6)}
      }
      &.scss .box {
        ${SC.animation(SC.fadeIn('y',250), 1.2, 'ease', .5)}
      }
      &.memo .box {
        ${SC.animation(SC.fadeIn('y',200), 1, 'ease', .7)}
      }
    }
  }
`;
const RecordTextBox = styled.div`
  display:inline-block;
  position:relative;
  z-index:7;
  ${media.pc}{
    padding: 50px;
    background:rgba(255,255,255,.9);
    box-shadow:1px 2px 5px rgba(0, 0, 0, 0.1);
  }
  ${media.mo}{
    padding:20px;
  }
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;
const RecordVisual = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;
const RecordItem = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  font-size:34px;
  font-weight:900;
  color:${colors.baseWhite};
  .box {
    position:relative;
    width:100%;
    height:100%;
    background:${props => props.$bg || '#fff'};
  }
  ${media.pc}{
    .tit {
      position:absolute;
    }
    &.react {
      z-index:4;
      width:300px;
      height:300px;
      transform: translate(-50%, -50%);
      .box {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        .tit{
          position:relative;
        }  
      }
    }
    &.js {
      z-index:3;
      width:380px;
      height:280px;
      color:#000;
      transform: translate(-24%, -25%);
      .tit {
        bottom:10px;
        right:10px;
        font-size:48px;
      }
    }
    &.html {
      z-index:2;
      width:350px;
      height:200px;
      transform: translate(-94%, -100%);
      .tit {
        top:30px;
        left:30px;
        font-size:42px;
        color:#000;
      }
    }
    &.scss{
      z-index:5;
      width:300px;
      height:210px;
      transform: translate(-100%, 30%);
      .tit{
        left:60px;
        bottom:40px;
        font-size:32px;
      }
    }
    &.memo {
      width:360px;
      height:230px;
      transform: translate(-13%, -114%);
      .box {
        border:1px solid #000;
      }
      .tit {
        top:15%;
        right:12%;
        font-size:36px;
        color:#000;
      }
    }
  }
  
  ${media.mo}{
    .box {
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      width:80px;
      height:80px;
    }
    .tit{
      font-size:21px;
    }
    &.react{
      transform: translate(74%, -200%);
    }
    &.js{
      transform: translate(-50%, 177%);
      .tit{
        color:#000;
      }
    }
    &.html{
      transform: translate(-180%, -250%);
      .tit{
      }
    }
    &.scss{
      transform: translate(-197%, 150%);
      .tit{
      }
    }
    &.memo{
      transform: translate(110%, 124%);
      .box{
        border:1px solid #000;
      }
      .tit{
        color:#000;
      }
    }
  }
`;
const ItemImg = styled.span`
  display:inline-block;
  width:35px;
  height:35px;
  & > img {
    width:100%;
    max-width:100%;
  }
`;