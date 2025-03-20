import { ReactNode } from "react";
import styled from "styled-components"

interface ContentLayoutPropsType {
  children: ReactNode;
}

export const ContentLayout = ({children}:ContentLayoutPropsType) => {
  return (
    <StyleWrap>
      <main>
        {children}
      </main>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  max-width: 1920px;
  margin:0 auto;
  position:relative;
  padding-top:55px;
`;