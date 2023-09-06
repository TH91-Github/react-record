import { CodeBlock, dracula } from "react-code-blocks";
import "assets/scss/common.scss";
import { styled } from "styled-components";

const CodeWrap = styled.div`
  margin: 10px 0;
  font-size:14px;
  .linenumber {
    min-width:auto !important;
    padding-right:10px !important;
    font-size:14px !important;
    font-style:normal !important;
  }
`
function CodeTemplate({text}){
  return(
    <CodeWrap>
      <CodeBlock
        language="javascript"
        codeBlock
        theme={dracula}
        showLineNumbers={true}
        text={text ? text : "console.log('테스트')"}
      />
    </CodeWrap>
  )
}
export default CodeTemplate;
