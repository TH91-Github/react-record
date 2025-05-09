// ✅ TestPage.jsx -> Parent Component

import { CodeHighlight } from "components/common/CodeHighlight";
export const TestPage = () => {
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
