import { useEffect, useState } from "react";
import styled from "styled-components";
import { routerData } from "routes/reRouterData";
import { colors, transitions } from "assets/styles/Variable";
import { TextCase } from "utils/textChk";
import * as SC from "assets/styles/StyledCm";


function BlogVisual(){
  const [exceptionH, setExceptionH] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const visualList = routerData.filter((item)=> item.title);

  useEffect(()=>{
    const headerH = document.querySelector('.header').clientHeight;
    setExceptionH(headerH)
  },[]);
  const itemClick = (idx) => {
    const movingBtn = document.querySelector('.visual__move-btn');
    if(activeIdx !== idx){
      if([...movingBtn.classList].includes('ani')){
        movingBtn.classList.remove('ani');
        setTimeout(()=>{
          movingBtn.classList.add('ani');
        },100)
      }else{
        movingBtn.classList.add('ani');
      }
    }
    setActiveIdx(idx);
  }
  const movingScroll = () => {
    console.log("해당 컨텐츠 무빙")
  }
  return (
    <VisualWrap $headerH={exceptionH} className="visual">
      <VisualInner className="visual__inner">
        <VisualInfo className="visual__info">
          <VisualTextBox className="visual__info__box">
            <p className="visual-tit">TEXT, TEXT</p>
            <p className="visual-tit">TEXT, TEXT </p>
            <p className="visual-tit">TEXT, TEXT</p>
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
                    <VisualCategoryBox>
                      <VisualCategoryKr className="tit-kr">{item.title}</VisualCategoryKr>
                      <VisualCategoryEn className="tit-en">{TextCase(item.path)}</VisualCategoryEn>
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
            <VisualMoveBtn onClick={() => movingScroll()} className="visual__move-btn">
              <VisualMoveText className="text">
                <span className="before">Click</span>
                <span className="blind">또는</span>
                <span className="after">Scroll</span>
                <span className="blind">하여 아래 내용 확인하기</span>
              </VisualMoveText> 
            </VisualMoveBtn>
        </VisualMove>
      </VisualInner>
    </VisualWrap>
  )
}
export default BlogVisual;

const VisualWrap = styled.div`
  position:relative;
  width:100%;
  height:${props => `calc(90vh - ${props.$headerH}px)` || '100vh'};
  min-height:600px;
  padding-bottom:50px;
  border:1px solid green;
`;
const VisualInner = styled(SC.InnerStyle)`
  display:flex;
  position:relative;
  height:100%;
`
const VisualInfo = styled.div`
  position:relative;
  width:30%;
  height:100%;
  border:1px solid red;
`;
const VisualTextBox = styled.div`
  position:relative;
  top:50%;
  width:100%;
  transform: translateY(-120%);
  & > p {
    font-size:48px;
    font-weight:800;
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
`;

const VisualCategory = styled.div`
  width:70%;
  height:100%;
  border:1px solid blue;
`;
const VisualCategoryLists = styled.div`
  display:flex;
  gap:20px;
  height:100%;
  ${SC.animation(SC.fadeIn('-x', 100))}
`;
const VisualCategoryItem = styled.div`
  width:calc((100% - 60px) / 5);
  height:100%;
  transition:${transitions.base};
  &.active {
    width:calc((100% - 60px) / 2.5);
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
  border:1px solid red;
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
`;
const VisualCategoryBox = styled.div`
  position:absolute;
  z-index:2;
  bottom:0;
  width:100%;
  height:25%;
  padding:30px;
  border:1px solid red;
  text-align:left;
`;
const VisualCategoryKr = styled.span`
  display:block;
  font-size:18px;
  color:#fff;
  transition:${transitions.base};
  text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);
`;
const VisualCategoryEn = styled.span`
  display:block;
  font-size:14px;
  color:#fff;
  transition:${transitions.base};
`;

const VisualMove = styled.div`
  position:absolute;
  z-index:5;
  bottom:30%;
  width:calc(30% - 15px);
  margin-top:50px;
  text-align:center;
  ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
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
    background:${colors.yellow};
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
  &.ani {
    &::after {
      animation: boxRotate .3s linear;
      @keyframes boxRotate {
        from { transform:translate(-50%, -50%) rotate(0); }
        to {transform:translate(-50%, -50%) rotate(180deg); }
      }
    }
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