import { useEffect, useRef } from 'react';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from "highlight.js";

interface CodeHighlightPropsType {
  language?: string;
  code?: string;
}

export const CodeHighlight = ({
  language = 'javascript',
  code = 'Test',
}: CodeHighlightPropsType) => {
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};
