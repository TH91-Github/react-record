import { bgShadow, media } from "assets/style/variables";
import { createPortal } from "react-dom";
import styled from "styled-components"

interface ModalPropsType {
  isDimmed?: boolean; // dimmed on/off EX: 2중 모달 시 
  isUnder?: boolean, // 2중 모달일 경우 딤드보다 아래로
  $width?: number,
  $align?: 'center' | 'left' | 'right';
  children?:React.ReactNode;
  onClose: () => void;
}
export const Modal = ({
  isDimmed = true,
  isUnder,
  $width = 250,
  $align = 'center',
  children,
  onClose
}:ModalPropsType) => {
  const handleCloseClick = () => {
    onClose();
  }
  return (
    createPortal(
      <StyleWrap 
        className={`modal-wrap ${isUnder ? 'under':''}`}
        $width={$width}
        $align={$align}
      >
        <div className="modal-inner">
          <div className="modal-cont">
            {children}
          </div>
          <button 
            type="button" 
            className="close-btn"
            onClick={handleCloseClick}
          >
            <span>닫기</span>
          </button>
        </div>
        <div className={`dimmed ${!isDimmed ? 'overlapping': ''}`} onClick={handleCloseClick}></div>
      </StyleWrap>,
      document.body
    )
  )
}

interface StyleWrapProps {
  $width:number;
  $align:string;
}
const StyleWrap = styled.div<StyleWrapProps>`
  position:fixed;
  z-index:100;
  top:0;
  left:0;
  width:100svw;
  height:100svh;
  text-align: ${({$align}) => $align};
  .dimmed {
    position: absolute;
    z-index:101;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
    &.overlapping {
      opacity:0;
      background:none;
    }
  }
  .modal-inner{
    position:absolute;
    z-index:102;
    top:50%;
    left:50%;
    width:${({$width}) => $width}px;
    min-height:100px;
    max-width:80%;
    padding:30px;
    border-radius:5px;
    background: #fff;
    box-shadow:${bgShadow.base};
    transform: translate(-50%, -50%);
    .close-btn {
      top:10px;
      right:10px;
    }
  }
  &.under {
    .modal-inner{
      z-index:90;
    }
  }

${media.mo}{
  .modal-inner{
    width:90%;
  }
}

`;