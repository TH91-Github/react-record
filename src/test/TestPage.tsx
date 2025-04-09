// ✅ TestPage.jsx -> Parent Component
import DOMPurify, { Config } from 'dompurify';
import { useMemo } from 'react';

export const TestPage = () => {
  const iframeTest = '<iframe src="http://localhost:4000/test" width="350" height="350" frameborder="0"></iframe>';
  
  // EX) 
  const useSanitizeHtml = (  dataHTML: string, options?: Config ) => {
    return useMemo(() => {
      return DOMPurify.sanitize(dataHTML, options);
    }, [dataHTML, options]);
  };

  return(
    <div className="test-wrap">
      TEST
      <p dangerouslySetInnerHTML={{ __html: useSanitizeHtml(iframeTest, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'src'],
      })}} />
    </div>
  )
}

// const testData = `
// <p>
//   안전하게 사용할 수 있는 <br />
//   <strong>DOMPurify.sanitize</strong> HTML 구조 <br />
//    <a href="javascript:alert('공격!! XSS!')">클릭</a> <br />
//   <img src="terror" onerror="alert('공격!! XSS!')" />
// </p>
// `;