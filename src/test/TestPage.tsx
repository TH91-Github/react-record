// ✅ TestPage.jsx -> Parent Component

import { Hljs } from "components/common/Hljs";
export const TestPage = () => {
  return(
    <div className="test-wrap">
      <Hljs 
        code={`
          function Test() {
            console.log('Test')
          }
        `}
      />
      <textarea name="" id="" className="textarea-test"></textarea>
    </div>
  )
}
