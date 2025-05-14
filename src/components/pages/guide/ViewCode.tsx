import { Hljs } from "components/common/Hljs";
import { TabBtns } from "components/common/TabBtns";
import { useState } from "react";
import styled from "styled-components";
import { ComponentsInfoType } from "types/guide";

interface ViewCodePropsType {
  data: ComponentsInfoType
}
export const ViewCode = ({data}:ViewCodePropsType) => {
  const {code} = data;
  const [tabVal, setTabVal] = useState(0);
  const tabData = code.map(item => item.title);

  const changeEvent = (val:string) => {
    const valIndex = tabData.indexOf(val);
    setTabVal(valIndex >= 0 ? valIndex : 0);
  }

  return(
    <StyleWrap>
      <p className="tit">코드 미리보기</p>
      <div className="code-wrap">
        <TabBtns
          isAll={false}
          data={tabData} 
          changeEvent={changeEvent} 
        />
        <Hljs 
          code={code[tabVal].code}
          language={code[tabVal].lang}
        />
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .code-wrap {
    margin-top:20px;
  }
  .hljs-wrap{
    margin-top:10px;
  }
`;