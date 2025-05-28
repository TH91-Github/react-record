import { breakpoints } from "assets/style/variables";
import DOMPurify, { Config } from 'dompurify';

// 🔹 모바일 사이즈 체크
export function isMobileSizeChk():boolean{ 
  const mediaQuery = `(max-width: ${breakpoints.mo - 1}px)`; 
  return window.matchMedia(mediaQuery).matches;
}

// 🔹 className 조건 처리
export const cn = (...classNames: (string | false | undefined)[]) => {
  const classSet = new Set(
    classNames.flatMap((className) =>
      typeof className === 'string' ? className.split(' ') : []
    )
  );
  return [...classSet].join(' ');
};

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
  const html = dataHTML.replace(/className=/g, 'class=');
  return DOMPurify.sanitize(html, {
    ...options,
    ALLOWED_TAGS: ['a', 'span', 'div', 'p', 'br', 'strong', 'em', ...(options?.ALLOWED_TAGS || [])],
    ALLOWED_ATTR: [
      'id', 
      'class',
      'href',
      'target',
      'rel',
      ...(options?.ALLOWED_ATTR || [])
    ],
    // 추가 보안 설정
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.:]|$))/i,
    SANITIZE_DOM: true,
    SAFE_FOR_TEMPLATES: true,
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onmouseenter', 'onmouseleave'],
    ALLOW_DATA_ATTR: false,
  });
}
