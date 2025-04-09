// 📍 location 기준 Hook
import DOMPurify, { Config } from 'dompurify';
import { useMemo } from 'react';

// DOMPurify 안전하게 HTML 구조 처리 - https://th91.tistory.com/33
export const useSanitizeHtml = (  dataHTML: string, options?: Config ) => {
  return useMemo(() => {
    return DOMPurify.sanitize(dataHTML, options);
  }, [dataHTML, options]);
};