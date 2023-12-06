import { Button, InnerStyle } from "assets/styles/StyledCm";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { routerData } from "routes/routerData";
import { transitions } from "assets/styles/Variable";

function BlogVisual(){
  const [exceptionH, setExceptionH] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const visualList = routerData.filter((item)=> item.title);

  useEffect(()=>{
    const headerH = document.querySelector('.header').clientHeight;
    setExceptionH(headerH)
  },[]);
  const itemClick = (idx) => {
    setActiveIdx(idx)
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
                    <p>{item.title}</p>
                  </VisualCategoryBtn>
                </VisualCategoryItem>
              ))
            }
          </VisualCategoryLists>
        </VisualCategory>
        <VisualCategoryMove className="visual__move">
            {/* 바뀌는 텍스트 */}
            <p>{visualList[activeIdx].title} 미리보기 👉</p>
            <VisualCategoryMoveBtn className="visual__move-btn">
              <span className="arrow">Arrow</span>
            </VisualCategoryMoveBtn>
        </VisualCategoryMove>
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
const VisualInner = styled(InnerStyle)`
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
  }
`;
const VisualCategoryMove = styled.div`
  position:absolute;
  bottom:30%;
  width:calc(30% - 15px);
  margin-top:50px;
  border:1px solid red;
  text-align:center;
`;
const VisualCategoryMoveBtn = styled(Button)`
  position:absolute;
  top:50%;
  left:100%;
  width:80px;
  height:80px;
  background:#000;
  font-size:24px;
  font-weight:600;
  color:#fff;
  transform: translate(-50%, -50%);
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
`;
const VisualCategoryItem = styled.div`
  width:calc((100% - 60px) / 5);
  height:100%;
  transition:${transitions.base};
  &.active {
    width:calc((100% - 60px) / 2.5);
  }
  border:1px solid red;
`;

const VisualCategoryBtn = styled(Button)`
  width:100%;
  height:100%;
`;
