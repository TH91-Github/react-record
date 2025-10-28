import { Modal } from "components/common/Modal"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

// 🔹 로그인 필요 요청 모달
export const LoginAlertModal = ({modalTitle, modalDesc, onClose}:{
  modalTitle?:string,
  modalDesc?:string,
  onClose: () => void
}) => {

  const onModalClose = () => {
    onClose()
  }
  return( 
    <Modal onClose={onModalClose}>
      <StyleModal>
        <p className="tit">{modalTitle ||'로그인이 필요해요 !'}</p>
        <p className="desc">{modalDesc || '로그인 화면으로 이동할까요?'}</p>
        <div className="btn-wrap">
          <NavLink to={'/member'} title="로그인하기" className="btn-login">
            로그인하러 가기
          </NavLink>
          <button>
            취소
          </button>
        </div>
      </StyleModal>
    </Modal>
    
  )
}

const StyleModal = styled.div`
  .tit {
    font-size:18px;
  }
  .desc {
    margin-top:10px;
    font-size:14px;
  }
  .btn-wrap{
    margin-top:15px;
  }
`;