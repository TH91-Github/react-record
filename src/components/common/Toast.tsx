import { colors } from "assets/style/variables";
import { useToast } from "hooks/useToast";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Toast = () => {
  const { toasts } = useToast();
  console.log('Toast - ' + toasts)

  return createPortal(
    <StyleWrap className="toast-container">
      {/* {toasts.map(({ id, visible, message, type }) => (
        <div key={id} className={`toast ${type} ${visible ? 'show' : 'hide'}`}>
          {message} (ID: {id})
        </div>
      ))} */}
        <div className={`toast success show`}>
          <span>asdasdasdasd</span>
        </div>
        <div className={`toast success show`}>
          <span>asdasdasdasd</span>
        </div>
        <div className={`toast success show`}>
          <span>asdasdasdasd</span>
        </div>
    </StyleWrap>,
    document.body
  );
}

const StyleWrap = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;
  align-items:center;
  position: fixed;
  z-index: 9999;
  bottom:0;
  left: 50%;
  padding-bottom:10px;
  transform: translateX(-50%);
  .toast {
    overflow:hidden;
    position:relative;
    border-radius: 5px;
    border:1px solid ${colors.lineColor};
    border-left:none;
    background:#fff;
    transition: all 0.3s ease;
    &::before {
      position:absolute;
      top:0;
      left:0;
      width:5px;
      height:100%;
      border:1px solid ${colors.mSlateBlue};
      background:${colors.mSlateBlue};
      content:'';
    }
    & > span {
      display:inline-block;
      padding: 12px 16px;
    }
    &.success{
      &::before {
        border-color: ${colors.green};
        background:${colors.green};
      }
    }
    &.show {
      opacity: 1;
      animation: toastAni .3s ease;
    }
    &.hide {
      opacity: 0;
      transform: translateY(100%);
    }
  }
  @keyframes toastAniUp { 
    from{
      transform: translateY(100%);
    }
    to{
      transform: translateY(0);
    }
  }
`;