import { breakpoints } from "assets/style/variables";
import DOMPurify, { Config } from 'dompurify';

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
// 🔹 HTML 특수문자 이스케이프와 안전하게 sanitize
export function escapeSanitizedHtml(str: string) {
  const escapeCOde = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  const sanitizedCode = DOMPurify.sanitize(escapeCOde);
  return sanitizedCode
};
// 🔹 안전하게 문자열 HTML 구조 처리 / Hook (memo) 필요 시 -> useSanitizeHtml 사용 
export function sanitizeHtml(dataHTML: string, options?: Config) {
  return DOMPurify.sanitize(dataHTML, options);
}
