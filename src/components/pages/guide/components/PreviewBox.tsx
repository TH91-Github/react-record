import { Popup } from "components/common/Popup"
import styled from "styled-components"



type PreviewMapType = {
  [key: string]: React.ReactNode
}
const previewMap : PreviewMapType= {
  popup: <Popup />
}


export const PreviewBox = () => {
  return (
    <StyleWrap>

    </StyleWrap>
  )
}
const StyleWrap = styled.div`

`;