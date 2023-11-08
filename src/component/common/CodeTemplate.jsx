import { CodeBlock, dracula } from "react-code-blocks";
import "assets/scss/common.scss";
import { styled } from "styled-components";
import { media, colors } from "component/styled/common/Variable";

const CodeWrap = styled.div`
  margin: 10px 0;
  font-size:14px;
  .linenumber {
    position:relative;
    width:35px !important;
    padding-left:5px !important;
    padding-right:10px !important;
    font-size:14px !important;
    font-style:normal !important;
    text-align:right;
    box-sizing:border-box;
    &::after {
      position:absolute;
      top:50%;
      left:0;
      width:2px;
      height:30%;
      background:${colors.yellow};
      transform:translateY(-50%);
      content:"";
    }
  }
  ${media.onlyMo} {
    font-size:13px;
  }
`;
function CodeTemplate({text, propsClass}){
  return(
    <CodeWrap className={propsClass}>
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

CodeTemplate.defaultProps = {
  propsClass : "codeWrap"
}
export default CodeTemplate;
