import { Modal } from "components/common/Modal";
import { useRecoilState } from "recoil";
import { stateAlert } from "recoil/atoms";
import styled from "styled-components";


export const AlertModule = () => {
  const [alertState, setAlertState] = useRecoilState(stateAlert);

   const onClose = () => {
    setAlertState(prev => ({ ...prev, isActive: false }));
  };
  if (!alertState.isActive) return null;
  return (
    <Modal onClose={onClose}>
      <StyleMessage>{alertState.message}</StyleMessage>
    </Modal>
  )
}

const StyleMessage = styled.p`
  
`;