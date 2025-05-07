// ✅ TestPage.jsx -> Parent Component

import { CodeHighlight } from "components/common/CodeHighlight"
export const TestPage = () => {
  const codeTest = `
    function Test() {
      console.log('Test)
    }
  `;

  return(
    <div className="test-wrap">
      <CodeHighlight 
        code={`
          function Test() {
            console.log('Test)
          }
        `}
      />
    </div>
  )
}
