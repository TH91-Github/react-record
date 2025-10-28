import { Modal } from "components/common/Modal";
import { InnerHTML } from "components/ui/InnerHTML";
import { OutLink } from "components/ui/OutLink";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components";
import { GuidePopupDataType } from "types/guide/guide";

// 🔹 detail modal
interface MoreLinkModalPropsType {
  data: GuidePopupDataType;
  onClose : () => void;
}
export const MoreLinkModal = ({data, onClose}:MoreLinkModalPropsType) => {

  const handleModalClose = () => {
    onClose();
  }
  if(!data) return null
  return (
    <Modal $width={500} onClose={() => handleModalClose()}>
      <StyleModal>
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={data.modalTitle}
          pointer="circle"
          $fontSize={18}
        />
        <InnerHTML tag="p" data={data.modalDesc} customClass="desc" />
        <p className="link">
          <OutLink
            href={data.link}
            titleText={'github 자세히 보기'}
          />
        </p>
      </StyleModal>
    </Modal>
  )
}

const StyleModal = styled.div`
text-align:left;
.tit{
  font-size:18px;
}
.desc{
  margin-top:15px;
  font-size:14px;
}
.link {
  margin-top:15px;
}
`;