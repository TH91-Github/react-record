import { NamingContent } from "components/pages/guide/principles/namingConventions/NamingContent";
import { NamingHeader } from "components/pages/guide/principles/namingConventions/NamingHeader";
import { useState } from "react";
import styled from "styled-components";

export const NamingConventionsPage = () => {
  const [selectNaming, setSelectNaming] = useState<string | null>(null);

  const updateNaming = (e:string | null) => {
    setSelectNaming(e)
  }
  return (
    <StyleWrap className="naming-convention">
      <NamingHeader 
        selectNaming={selectNaming}
        updateNaming={updateNaming}
      />
      <NamingContent selectNaming={selectNaming} />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  
`;