// ✅ TestPage.jsx -> Parent Component
import DOMPurify, { Config } from 'dompurify';
import { useMemo } from 'react';

export const TestPage = () => {

  return(
    <div className="test-wrap">
      <div className="input-test">
        <input type="text" />
        <input type="password" />
      </div>
    </div>
  )
}
