import { breakpoints } from "assets/style/variables";

// 🔹 모바일 사이즈 체크
export function isMobileSizeChk():boolean{ 
  const mediaQuery = `(max-width: ${breakpoints.mo - 1}px)`; 
  return window.matchMedia(mediaQuery).matches;
}

// 🔹 복사, 카피 async/await 
export async function copyClipboard (copyText: string):Promise<boolean> { 
  try {
    await navigator.clipboard.writeText(copyText);
    return true;
  } catch (err) {
    return false;
  }
}
