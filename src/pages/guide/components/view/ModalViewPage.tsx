import { colors } from "assets/style/variables";
import { Modal } from "components/common/Modal";
import { modalData } from "components/pages/guide/data/componentsData";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import { useState } from "react";
import styled from "styled-components";

export const ModalViewPage = () => {
  const [demo, setDemo] = useState({
    case1:false,
    case2:false,
    caseSub2:false,
  });
  
  const handleModalClick = () => {
    setDemo(prev => ({...prev, case1:!prev.case1}))
  }
  const handleModalClick2 = () => {
    setDemo(prev => ({...prev, case2:!prev.case2}))
  }
  const handleModalClick3 = () => {
    setDemo(prev => ({...prev, caseSub2:!prev.caseSub2}))
  }

  return (
    <StlyeWrap className="view-wrap modal">
      <div className="view-item">
        <ViewInfo data={modalData} />
      </div>
      <div className="view-item">
        <p className="tit">Modal 데모</p>
        <div className="example-lists">
           <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={handleModalClick}>
              <span>모달 데모</span>
            </button>
            { demo.case1 && (
              <Modal onClose={handleModalClick}>
                <p className="tit">Madal Test</p>
              </Modal>
            )}
          </div>
          <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={handleModalClick2}>
              <span>중첩 모달 데모</span>
            </button>
            { demo.case2 && (
              <Modal onClose={handleModalClick2} isUnder={demo.caseSub2}>
                <StyleDemoModal2>
                  <p className="tit">Madal Test2</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    title="modal Demo 보기"
                    onClick={handleModalClick3}>
                    <span>모달 2-2</span>
                  </button>
                </StyleDemoModal2>
                { demo.caseSub2 && (
                  <Modal onClose={handleModalClick3} isDimmed={false}>
                    <p className="tit">Madal Test2</p>
                  </Modal>
                )}
              </Modal>
            )}
          </div>
        </div>
      </div>
      <div className="view-item">
        <ViewCode data={modalData} />
      </div>
    </StlyeWrap>
  )
}

const StlyeWrap = styled.div`
  .view-item{
    margin-top:30px;
    padding-top:30px;
    border-top:1px solid ${colors.lineColor};
    .tit{ 
      font-size: 18px;
    }
    &:first-child{
      margin-top:0;
      padding-top:0;
      border-top:none;
    }
  }
  .example-lists{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    margin-top:20px;
  }
`;

const StyleDemoModal2 = styled.div`
  .btn{
    margin-top:10px;
  }
`;