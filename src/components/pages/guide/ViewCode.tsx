import { Hljs } from "components/common/Hljs";
import { useState } from "react";
import styled from "styled-components";
import { ComponentsInfoType } from "types/guide/guide";

interface ViewCodePropsType {
  data: ComponentsInfoType
}
export const ViewCode = ({data}:ViewCodePropsType) => {
  const {codeData} = data;
  const [tabVal, setTabVal] = useState(0);

  return(
    <StyleWrap>
      <p className="tit">사용 예시</p>
      <div className="code-wrap">
        <Hljs 
          code={codeData[tabVal].code}
          language={codeData[tabVal].lang}
        />
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
.code-wrap {
  margin-top:20px;
}
`;