import { breakpoints } from "assets/style/variables";

// 모바일 사이즈 체크
export function isMobileSizeChk():boolean{ 
  const mediaQuery = `(max-width: ${breakpoints.mo - 1}px)`; 
  return window.matchMedia(mediaQuery).matches;
}