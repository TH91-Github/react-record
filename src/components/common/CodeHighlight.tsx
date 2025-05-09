import { useEffect, useRef, useState } from 'react';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from "highlight.js";
import DOMPurify from 'dompurify';

interface CodeHighlightPropsType {
  language?: string;
  code?: string;
  isLineNumber?: boolean;
}

export const CodeHighlight = ({
  language = 'javascript',
  code = 'Test',
  isLineNumber = true,
}: CodeHighlightPropsType) => {
  const codeRef = useRef<HTMLElement>(null!);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  // line
  useEffect(() => {
    setLineNumbers(code.split('\n').map((_, index) => index + 1));
  }, [code]);


  useEffect(() => {
    if (codeRef.current) {
      const sanitizedCode = DOMPurify.sanitize(code);
      codeRef.current.textContent = sanitizedCode;
      codeRef.current.dataset.highlighted = ''; // 데이터 속성 초기화
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="code-container">
      {
        isLineNumber && (
          <div className="line-numbers">
            {lineNumbers.map(num => (
              <div key={num} className="line-number">{num}</div>
            ))}
          </div>
        )
      }
      <pre className="code-block">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};
