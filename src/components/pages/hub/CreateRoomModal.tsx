import { Modal } from "components/common/Modal";
import styled from "styled-components"

export const CreateRoomModal = ({
  onClose
}:{
  onClose: () => void;
}) => {
  const onModalClose = () => {
    onClose()
  }
  return (
    <Modal onClose={onModalClose}>
      <StyleModal>
        {/* 방 이름 */}
        {/* 카테고리 - 일반, 여행*/}
      </StyleModal>
    </Modal>
  )
} 

const StyleModal = styled.div`

`;