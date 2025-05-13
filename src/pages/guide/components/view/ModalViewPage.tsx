import { colors } from "assets/style/variables";
import { Hljs } from "components/common/Hljs";
import { Modal } from "components/common/Modal";
import { TabBtns } from "components/common/TabBtns";
import { viewCode } from "components/pages/guide/data/componentsData";
import { useState } from "react";
import styled from "styled-components"

export const ModalViewPage = () => {
  const [demo, setDemo] = useState({
    case1:false,
    case2:false,
    caseSub2:false,
  });
  const [tabVal, setTabVal] = useState(0);
  const tabData = viewCode.modal.map(item => item.title);
  
  const handlePopupClick = () => {
    setDemo(prev => ({...prev, case1:!prev.case1}))
  }
  const handlePopupClick2 = () => {
    setDemo(prev => ({...prev, case2:!prev.case2}))
  }
  const handlePopupClick3 = () => {
    setDemo(prev => ({...prev, caseSub2:!prev.caseSub2}))
  }

  const changeEvent = (val:string) => {
    const valIndex = tabData.indexOf(val);
    setTabVal(valIndex >= 0 ? valIndex : 0);
  }
  return (
    <StlyeWrap className="view-wrap popup">
      <p className="desc">Modal 컴포넌트입니다.</p>
      <ul className="bullet-lists">
        <li className="circle">github: -</li>
        <li className="circle">storybook: -</li>
      </ul>
      <div className="view-item">
        <p className="tit">Modal 데모</p>
        <div className="example-lists">
           <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={handlePopupClick}>
              <span>모달 데모</span>
            </button>
            { demo.case1 && (
              <Modal onClose={handlePopupClick}>
                <p className="tit">Madal Test</p>
              </Modal>
            )}
          </div>
          <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={handlePopupClick2}>
              <span>중첩 모달 데모</span>
            </button>
            { demo.case2 && (
              <Modal onClose={handlePopupClick2} isUnder={demo.caseSub2}>
                <p className="tit">Madal Test2</p>
                 <button
                  type="button"
                  className="btn"
                  title="modal Demo 보기"
                  onClick={handlePopupClick3}>
                  <span>중첩 모달 데모</span>
                </button>
                { demo.caseSub2 && (
                  <Modal onClose={handlePopupClick3} isDimmed={false}>
                    <p className="tit">Madal Test2</p>
                  </Modal>
                )}
              </Modal>
            )}
          </div>
        </div>
      </div>
      <div className="view-item">
        <p className="tit">Code 확인하기</p>
        <div className="code-wrap">
          <TabBtns
            isAll={false}
            data={tabData} 
            changeEvent={changeEvent} 
          />
          <Hljs 
            code={viewCode.modal[tabVal].code}
            language={viewCode.modal[tabVal].lang}
          />
        </div>
      </div>
    </StlyeWrap>
  )
}

const StlyeWrap = styled.div`
  & > .bullet-lists {
    margin-top:10px;
  }
  .view-item{
    margin-top:30px;
    padding-top:30px;
    border-top:1px solid ${colors.lineColor};
    .tit{ 
      font-size: 18px;
    }
  }
  .example-lists{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    margin-top:20px;
  }
  .code-wrap {
    margin-top:20px;
  }
  .hljs-wrap{
    margin-top:10px;
  }
`;