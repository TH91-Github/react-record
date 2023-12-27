import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { colors, media } from "assets/styles/Variable";
import { Svglink } from "assets/styles/SvgPath";
import CodeTemplate from "components/common/element/CodeTemplate";

const pointColor = colors.blue;
const textList = ["Blog와 같이 여러 가지 기술을","기록하고 찾아볼 수 있도록 제작.","타이틀 내용을 직접 입력 후","Github 업로드 후 데이터를 활용하기 위함."]
const testCode =` function App() {
    return (
      <div className="App">
        TEST
      </div>
    )
  }`;


function BlogMainRecord(){
  return (
    <BlogWrap id="b-record">
      <RecordInner>
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
          <Detail className="record__detail ani-ini">
            <DetailInner className="record__detail__inner">
              <DetailHeader className="record__header">
                <HeaderIcon><img src={process.env.PUBLIC_URL+'logo192.png'} alt="" /></HeaderIcon>
                <HeaderTit>Record Page</HeaderTit>
              </DetailHeader>
              <DetailBody className="record__body">
                <Tit>📍Record</Tit>
                {
                  textList.map((text,idx)=>
                    <Txt key={idx}>{text}</Txt>
                  )
                }
                <CodeBox>
                  <CodeTemplate text={testCode}/>
                </CodeBox>
              </DetailBody>
            </DetailInner>
          </Detail>
        </RecordVisual>
      </RecordInner>
    </BlogWrap>
  )
}

export default BlogMainRecord;

const BlogWrap = styled.div`
  overflow:hidden;
  position:relative;
  padding:100px 0;
  &.on {
    .record__text__box {
      ${SC.animation(SC.fadeIn, 1, 'ease', 0.3)}
      .tit {
        ${SC.animation(SC.fadeIn, 1, 'ease', 0.4)}
      }
      .txt {
        ${SC.animation(SC.fadeIn, 1, 'ease', 0.5)}
      }
      .link-btn {
        ${SC.animation(SC.fadeIn, 1, 'ease', 0.6)}
      }
    }
    .record__detail{
      ${SC.animation(SC.fadeIn('x'), 1, 'ease', 0.6)}
      ${media.mo}{
        ${SC.animation(SC.fadeIn, 1, 'ease', 0.6)}
      }
    }
    
  }
`;
const RecordInner = styled(SC.InnerStyle)`
  display:flex;
  height:100%;
  ${media.mo}{
    flex-direction: column;
    & > div { 
      width:100%;
    }
  }
`;
const RecordTextBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  width:40%;
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;
const RecordVisual = styled.div`
  display:flex;
  justify-content:center;
  margin-top:20px;
  ${media.pc}{
    width:60%;
    margin-top:0px;
  }
`;
const Detail = styled.div`
  position: relative;
  transform: skewX(-1deg);
  &::before {
    positioN:absolute;
    top:50%;
    left:50%;
    width:100%;
    height:100%;
    background:${colors.baseWhite};
    transform: translate(-25%, -50%) scale(0.7);
    box-shadow:3px 3px 5px rgba(0, 0, 0, 0.3);
    content:"";
  }
  &::after {
    positioN:absolute;
    top:50%;
    left:50%;
    width:100%;
    height:100%;
    background:${pointColor};
    transform: translate(-40%, -50%) scale(0.9);
    box-shadow:3px 3px 5px rgba(0, 0, 0, 0.3);
    content:"";
  }
  ${media.mo}{
    &::before{
      transform: translate(-50%, -25%) scale(0.7);
    }
    &::after{
      transform: translate(-50%, -40%) scale(0.9);
    }
  }
`;
const DetailInner = styled.div`
  position:relative;
  z-index:2;
  width:300px;
  min-height:200px;
  padding:10px 20px;
  background:#343434;
  box-shadow:3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const DetailHeader = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  position:relative;
  padding-bottom:10px;
  &::after{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:2px;
    background:${pointColor};
    content:"";
  }
`;
const HeaderIcon = styled.span`
  display:inline-block;
  width:35px;
  height:35px;
  animation:iconAni 4s infinite linear;
  & > img {
    width:100%;
    max-width:100%;
  }
  @keyframes iconAni {
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }
`;
const HeaderTit = styled.p`
  font-size:18px;
  font-weight:800;
  color:${colors.baseWhite};
`;
const DetailBody = styled.div`
  padding:10px;
`;
const Tit = styled.p`
  font-weight:700;
  color:#fff;
`;
const Txt = styled.p`
  font-size:14px;
  color:#fff;
  margin-top:5px;
`;

// codeTemplate inline styled - !important로 수정
const CodeBox = styled.div`
  margin-top:10px;
  .codeWrap{
    margin:0;
    &>span{
      &>code{
        padding:2px !important;
        &>span{
          min-width: auto !important;
          padding-right:2px !important;
        }
      }
    }
  }
`;
