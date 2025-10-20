import { Modal } from "components/common/Modal";
import { utilsData } from "components/pages/guide/data/utilsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { MoreLinkModal } from "components/pages/guide/MoreLinkModal";
import { TabSearchLists } from "components/pages/guide/TabSearchLists";
import { InnerHTML } from "components/ui/InnerHTML";
import { OutLink } from "components/ui/OutLink";
import { TitleHeading } from "components/ui/TitleHeading";
import { useState } from "react";
import styled from "styled-components";
import { GuidePopupDataType } from "types/guide";

export const UtilsPage = () => {
  const [selectData, setSelectData] = useState<GuidePopupDataType | null>(null); 
  const handleItemClick = (ID: string) =>{
    const findItem = utilsData.find(item => item.id === ID)

    if(findItem){
      setSelectData(findItem)
    }
  }

  const onModalClose = () => {
    setSelectData(null);
  }
  return (
    <StyleWrap>
      <GuidePageHeading />
      <div className="content-wrap full">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText={'Utils System'} 
          pointer="underline"
          $fontSize={28}
          desc={['준비 중']}
        />
        <div className="section-wrap">
          <div className="section-item">
            <TabSearchLists 
              data={utilsData}
              searchPlaceholder={'Hook 검색해주세요.'}
              clickEvent={handleItemClick}
            />
          </div>
        </div>
        {selectData && (
          <MoreLinkModal 
            data={selectData}
            onClose={onModalClose}
          />
        )}
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`

`;
