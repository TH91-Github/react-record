import { guideComponentView } from "assets/style/guide/guideComponentView";
import { colors } from "assets/style/variables";
import { Modal } from "components/common/Modal";
import { modalData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import { useState } from "react";
import styled from "styled-components";

interface DemoItemType {
  case1: boolean;
  case2: boolean;
  caseSub2: boolean;
  case3: boolean;
};

export const ModalViewPage = () => {
  const [demo, setDemo] = useState<DemoItemType>({
    case1:false,
    case2:false,
    caseSub2:false,
    case3:false,
  });
  
  const handleModalClick = (key: keyof DemoItemType) => {
    setDemo(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <StlyeWrap className="view-wrap modal">
      <div className="view-item">
        <ViewInfo data={modalData} />
      </div>
      <div className="view-item">
        <p className="tit">Modal 데모</p>
        <div className="example-lists flex">
          <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={() => handleModalClick('case1')}>
              <span>Modal</span>
            </button>
            { demo.case1 && (
              <Modal onClose={() => handleModalClick('case1')}>
                <p className="tit">Madal Test</p>
              </Modal>
            )}
          </div>
          <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={() => handleModalClick('case2')}>
              <span>중첩</span>
            </button>
            { demo.case2 && (
              <Modal onClose={() => handleModalClick('case2')} isUnder={demo.caseSub2}>
                <StyleDemoModal2>
                  <p className="tit">Madal Test2</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    title="modal Demo 보기"
                    onClick={() => handleModalClick('caseSub2')}>
                    <span>모달 2-2</span>
                  </button>
                </StyleDemoModal2>
                { demo.caseSub2 && (
                  <Modal onClose={() => handleModalClick('caseSub2')} isDimmed={false}>
                    <p className="tit">Madal Test2</p>
                  </Modal>
                )}
              </Modal>
            )}
          </div>
          <div className="example-item">
            <button
              type="button"
              className="btn"
              title="modal Demo 보기"
              onClick={() => handleModalClick('case3')}>
              <span>자동 닫기</span>
            </button>
            { demo.case3 && (
              <Modal 
                autoCloseSecond={3000}
                onClose={() => handleModalClick('case3')}
              >
                <p className="tit">Madal 3초 후 닫기</p>
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
  ${guideComponentView}
`;

const StyleDemoModal2 = styled.div`
.btn{
  margin-top:10px;
}
`;