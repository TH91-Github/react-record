
import { CopyBlock, dracula } from "react-code-blocks";

function CodeBlockMy({children, ...props}){
  return(
    <CopyBlock
      theme={dracula}
      {...props}>
      {{children}}
    </CopyBlock>
  )
}
export default CodeBlockMy;
