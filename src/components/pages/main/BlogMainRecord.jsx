import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";
import { TextUpLow } from "utils/textChk";

const pointColor = colors.blue;
// 메모
// 한번 움직이고 나서 다시 아래에서 위로 올라오는 모션
// src 1차 배경색을 보여준 이후 두번째는 동일한 배경색에 컬러색상을 강조
const RecordList = [
  {
    title:"React",
    src:"",
    background:""
  },
  {
    title:"JS",
    src:"",
    background:""
  },
  {
    title:"HTML",
    src:"",
    background:""
  },
  {
    title:"CSS & SCSS",
    src:"",
    background:""
  },
  {
    title:"GIT",
    src:"",
    background:""
  },
];
function BlogMainRecord(){
  return (
    <BlogWrap id="b-record">
      <SC.InnerStyle>
        <RecordTextBox className="guide__text__box">
          <SC.TitleBox>
            <SC.Title className="tit ani-ini">
              <CartegoryTit>Record</CartegoryTit> - JS, React, CSS 등 설명
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
        <RecordVisual>
          {/* React git js css html */}
          {
            RecordList.map((item, idx) =>{
              return <RecordItem className={`item ${TextUpLow(item.title,"lower")}`} key={idx}>
                <span>{item.title}</span>
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
  position:relative;
  padding:250px 0;
  border:1px solid pink;
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
  }
`;
const RecordTextBox = styled.div`
  position:relative;
  z-index:2;
  padding: 0;
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
  border:1px solid green;
`;
const RecordItem = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  font-size:34px;
  font-weight:900;
  color:${colors.baseWhite};
  &.react {
    top:50%;
    left:50%;
    width:300px;
    height:200px;
    border:1px solid blue;
    background:${pointColor};
    transform: translate(-50%, -50%);
  }
  &.js {
    border:1px solid yellow;
  }
  &.html {
    border:1px solid red;
  }
  &[class*='css']{
    border:1px solid aqua;
  }
  &.git {
    border:1px solid black;
  }
`;