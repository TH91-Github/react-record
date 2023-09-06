import React from "react";
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = ({children, ...props}) => {
  return (
    <>
      <CodeMirror {...props}>
        {children}
      </CodeMirror>
    </>
  )

}
export default CodeEditor;