import { colors } from "assets/style/variables";
import { Modal } from "components/common/Modal";
import { InnerHTML } from "components/ui/InnerHTML";
import { useRecoilState } from "recoil";
import { stateAlert } from "recoil/atoms";
import styled from "styled-components";


export const AlertModule = () => {
  const [alertState, setAlertState] = useRecoilState(stateAlert);
   const onClose = () => {

    if(alertState.onClose) alertState.onClose()
    
    // 초기화
    setAlertState({ 
      isActive: false,
      title:'제목을 입력해주세요.',
      desc:'설명을 입력해주세요.',
      autoCloseSecond: 0,
      onClose: undefined,
    });
  };
  if (!alertState.isActive) return null;
  return (
    <Modal 
      {...(typeof alertState.autoCloseSecond === 'number' &&
        alertState.autoCloseSecond > 0 && {
        autoCloseSecond: alertState.autoCloseSecond,
      })}
      customClass="alert"
      onClose={onClose}
    >
      <StyleMessage>
        {alertState.title && (
          <p className="tit"><span>{alertState.title}</span></p>
        )}
        {alertState.desc && (
          <InnerHTML tag="p" data={alertState.desc} customClass="desc" />
        )}
      </StyleMessage>
    </Modal>
  )
}

const StyleMessage = styled.div`
  .tit {
    font-size:22px;
    & > span { 
      color:${colors.mSlateBlue};
    }
    & + .desc {
      margin-top:10px;
    }
  }
`;