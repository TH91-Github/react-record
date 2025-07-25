import { useCallback, useEffect, useRef } from "react";
// 📍 전역 Hook 

const BODY = document.body;

// 🔹 포커스 저장 및 회귀
export const useRestoreFocus = (): {
  beforeFocus: (target?: HTMLElement | string) => void;
  resetFocus: () => void;
} => {
  const focusTarget = useRef<HTMLElement | string | null>(null);
  const beforeFocus = (target?: HTMLElement | string) => {
    if (target) {
      focusTarget.current = target;
    } else {
      const active = document.activeElement;
      if (active instanceof HTMLElement) {
        focusTarget.current = active;
      }
    }
    console.log('오케이 접수')
    console.log(focusTarget)
  };
  const resetFocus = () => {
    requestAnimationFrame(() => {
      console.log('가냐')
      console.log(focusTarget)
      if (focusTarget.current instanceof HTMLElement) {
        focusTarget.current.focus();
      } else if (typeof focusTarget.current === 'string') {
        const el = document.querySelector(focusTarget.current);
        if (el instanceof HTMLElement) {
          el.focus();
          console.log(el)
        }
      }
    });
  };

  return { beforeFocus, resetFocus };
};

// 🔹 스크롤 잠금
export const useBodyScrolLock = () =>{
  const scrollYRef = useRef(0);
  const isLockedRef = useRef(false);
  const scrollbarWidthRef = useRef(0);

  const preventTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  // 스크롤바 너비
  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const lockScroll = useCallback(() => {
    if (isLockedRef.current) return;
    scrollYRef.current = window.scrollY;

    // 스크롤바가 존재할 경우에 레이아웃 흔들림 방지 패딩(right) 추가
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth > 0) {
      scrollbarWidthRef.current = scrollbarWidth;
      BODY.style.paddingRight = `${scrollbarWidth}px`;
    }

    BODY.style.overflowY = 'hidden';
    BODY.style.position = 'fixed';
    BODY.style.top = `-${scrollYRef.current}px`;
    BODY.style.width = '100%';

    document.addEventListener('touchmove', preventTouchMove, { passive: false });

    isLockedRef.current = true;
  }, [preventTouchMove]);

  const unlockScroll = useCallback(() => {
    if (!isLockedRef.current) return;

    BODY.style.overflowY = '';
    BODY.style.position = '';
    BODY.style.top = '';
    BODY.style.width = '';
    BODY.style.paddingRight = '';

    window.scrollTo(0, scrollYRef.current);
    document.removeEventListener('touchmove', preventTouchMove);
    isLockedRef.current = false;
  }, [preventTouchMove]);

  useEffect(() => {
    return () => {
      if (isLockedRef.current) {
        unlockScroll();
      }
    };
  }, [unlockScroll]);

  return { lockScroll, unlockScroll };
}
