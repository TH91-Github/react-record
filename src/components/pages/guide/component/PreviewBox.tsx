import Carousel from "components/common/Carousel"
import { Modal } from "components/common/Modal"
import styled from "styled-components"
// ❌ 현재 사용하지 않음. 잠시 대기
type PreviewMapType = {
  [key: string]: React.ReactNode
}
const previewMap : PreviewMapType= {
  // popup: <Modal />,
}

export const PreviewBox = ({id}:{id:string}) => {
  const PreviewComponent = previewMap[id]

  return (
    <StyleWrap>
      {
        PreviewComponent 
         ? PreviewComponent
         : (
          <div className="empty">
            <p className="empty-txt">❌<br /> 일치하는<br /> 컴포넌트가 없어요!</p>
          </div>
         )
      }
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  overflow:hidden;
  position:relative;
  width:100%;
  height:100px;
  border-radius:5px;
  background: #fff;
  .empty{
    display:flex;
    height:100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    &-txt {
      font-size:14px;
    }
  }
`;