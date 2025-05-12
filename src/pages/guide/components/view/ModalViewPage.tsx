import { colors } from "assets/style/variables";
import { Modal } from "components/common/Modal";
import { useState } from "react";
import styled from "styled-components"

export const ModalViewPage = () => {
  const [isPop, setIsPop] = useState(false);
  const [isPop2, setIsPop2] = useState(false);
  const handlePopupClick = () => {
    setIsPop(prev => !prev)
  }
  const handlePopupClick2 = () => {
    setIsPop2(prev => !prev)
  }
  return (
    <StlyeWrap className="view-popup">
      <p className="desc">Modal 컴포넌트입니다.</p>
      <div className="code-list">
        <ul className="bullet-lists">
          <li className="circle">github: -</li>
          <li className="circle">storybook: -</li>
        </ul>
      </div>
      <div className="example-wrap">
        <div className="example-item">
          <button
            type="button"
            className="btn"
            title="modal Demo 보기"
            onClick={handlePopupClick}>
            <span>모달 데모</span>
          </button>
          { isPop && (
            <Modal onClose={handlePopupClick} isUnder={isPop2}>
              <p className="tit">Madal Test</p>
            </Modal>
          )}
        </div>
        <div className="example-item">
          <button
            type="button"
            className="btn"
            title="modal Demo 보기"
            onClick={handlePopupClick}>
            <span>중첩 모달 데모</span>
          </button>
          { isPop && (
            <Modal onClose={handlePopupClick} isUnder={isPop2}>
              <p className="tit">Madal Test</p>
            </Modal>
          )}
        </div>
      </div>
      <div className="code-wrap">

      </div>
    </StlyeWrap>
  )
}

const StlyeWrap = styled.div`
  .code-list{
    margin-top:20px;
  }

  .example-wrap{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    margin-top:30px;
    padding-top:30px;
    border-top:1px solid ${colors.lineColor};
  }
`;