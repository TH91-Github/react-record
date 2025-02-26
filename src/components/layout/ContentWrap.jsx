import styled from "styled-components"

export const ContentWrap = ({children}) => {
  return (
    <StyleWrap>
      <main>
        {children}
      </main>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  padding-top:55px;
`;