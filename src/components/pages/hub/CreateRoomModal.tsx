import { media } from "assets/style/variables";
import { InputText } from "components/common/InputText";
import { Modal } from "components/common/Modal";
import { TextareaUI } from "components/common/TextareaUI";
import styled from "styled-components"

export const CreateRoomModal = ({
  onClose
}:{
  onClose: () => void;
}) => {
  const onModalClose = () => {
    onClose()
  }
  const handleCreate = () => {

  }
  return (
    <Modal $width={500} onClose={onModalClose}>
      <StyleModal>
        {/* 방 이름 */}
        <h3 className="title">방 만들기</h3>
        {/* 카테고리 - 일반, 여행*/}
        <div className="create-inner">
          <div className="create-box">
            {/* 제목 */}
            <div className="create-item">
              <p className="tit">제목</p>
              <InputText id="create-tit" />
            </div>
            {/* 설명 */}
            <div className="create-item">
              <p className="tit">설명</p>
              <TextareaUI id="create-desc" />
            </div>
          </div>
          <div className="create-box">
            {/* 카테고리 설정 */}
            <div className="create-item">
              <p className="tit">카테고리</p>
            </div>
            {/* 최대 인원 */}
            <div className="create-item">
              <p className="tit">최대 참여 인원</p>
            </div>
            {/* 공개 / 비공개 */}
            <div className="create-item">
              <p className="tit">공개 설정</p>
            </div>
          </div>
          <div className="btn-wrap">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCreate}
            >
              <span>확인</span>
            </button>
            <button
              type="button"
              className="btn btn-gray"
              onClick={onModalClose}
            >
              <span>취소</span>
            </button>
          </div>
        </div>
      </StyleModal>
    </Modal>
  )
} 

const StyleModal = styled.div`
  .create-inner{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    text-align:left;
    margin-top:20px;
    
  }
  .create-box{
    display:flex;
    flex-direction: column; 
    gap:10px;
    width:100%;
    &:first-child{
      width: calc(60% - 5px);
      & + .create-box {
        width: calc( 40% - 5px);
      }
    }
  }
  .btn-wrap {
    display:flex;
    gap:10px;
  }
${media.mo}{

}
`;