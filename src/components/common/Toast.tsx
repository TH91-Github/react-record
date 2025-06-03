import { useToast } from "hooks/useToast";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Toast = () => {
  const { toasts } = useToast();
  console.log('Toast - ' + toasts)

  return createPortal(
    <StyleWrap className="toast-container">
      {toasts.map(({ id, visible, message, type }) => (
        <div key={id} className={`toast ${type} ${visible ? 'show' : 'hide'}`}>
          {message} (ID: {id})
        </div>
      ))}
    </StyleWrap>,
    document.body
  );
}

const StyleWrap = styled.div`
  position: fixed;
  z-index: 9999;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
  .toast {
    background: #333;
    color: white;
    padding: 12px 16px;
    border-radius: 4px;
    margin-bottom: 8px;
    transition: all 0.3s ease;
    
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    
    &.hide {
      opacity: 0;
      transform: translateX(100%);
    }
    
  }
`;