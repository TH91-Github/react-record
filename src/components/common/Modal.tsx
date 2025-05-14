import { bgShadow, media } from "assets/style/variables";
import { useBodyScrolLock } from "hooks/common";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrolLock();
  const prevFocusRef = useRef<HTMLElement>(document.activeElement as HTMLElement);

  const handleCloseClick = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      prevFocusRef.current?.focus();
      if(isDimmed) unlockScroll();
    }, 200);
  }

  useEffect(() => {
    if(modalRef.current){
      modalRef.current.focus();
    }
    if(isDimmed) lockScroll(); // scroll lock, 중첩 모달 시 실행 x
    return () => setIsClosing(false);
  }, [lockScroll]);
  
  // 포커스 이탈 방지
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab' && modalRef.current) {
      const focusableElements: HTMLElement[] = [
        modalRef.current, // modal-inner tabindex 0
        ...modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
          'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, ' +
          '[tabindex]:not([tabindex="-1"]), [contenteditable]'
        ),
      ];
      const firstFocus = focusableElements[0];
      const lastFocus = focusableElements[focusableElements.length - 1];
      if (focusableElements.length === 0) return;

      // 처음과 마지막에서 탭, 역 탭 진행 시
      if (e.shiftKey && document.activeElement === firstFocus) {
        e.preventDefault();
        lastFocus.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocus) { 
        e.preventDefault();
        firstFocus.focus();
      }
    }
  },[]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  },[handleKeyDown]);

  return (
    createPortal(
      <StyleWrap 
        className={`modal-wrap ${isClosing?'modal-close':''}`}
        $width={$width}
        $align={$align}
      >
        <div 
          className={`modal-inner ${isUnder ? 'under':''}`}
          tabIndex={0}
          ref={modalRef}
        >
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
    animation: fadeUpCenterAni .3s .1s ease both;
    .close-btn {
      top:10px;
      right:10px;
    }
    &.under {
      animation: fadeDownCenterAni .3s ease both;
    }
  }
  &.modal-close{
    pointer-events: none;
    .modal-inner{
      animation: fadeDownCenterAni .2s ease both;
    }
    .dimmed {
      animation: fadeOutAni .2s ease both;
    }
  }
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
    animation: fadeInAni .3s ease both;
  }
${media.mo}{
  .modal-inner{
    width:90%;
  }
}
`;