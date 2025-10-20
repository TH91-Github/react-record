import { hooksData } from "components/pages/guide/data/hooksData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { MoreLinkModal } from "components/pages/guide/MoreLinkModal";
import { TabSearchLists } from "components/pages/guide/TabSearchLists";
import { TitleHeading } from "components/ui/TitleHeading";
import { useState } from "react";
import styled from "styled-components";
import { GuidePopupDataType } from "types/guide";

export const HooksPage = () => {
  const [selectData, setSelectData] = useState<GuidePopupDataType | null>(null); 
  const handleItemClick = (ID: string) =>{
    const findItem = hooksData.find(item => item.id === ID)
    setSelectData(findItem || null)
  }

  const onModalClose = () => {
    setSelectData(null);
  }
  return (
    <StyleWrap className="hook">
      <GuidePageHeading />
      <div className="content-wrap full">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText={'Hook System'} 
          pointer="underline"
          $fontSize={28}
          desc={['준비 중']}
        />
        <div className="section-wrap">
          <div className="section-item">
            <TabSearchLists 
              data={hooksData}
              searchPlaceholder={'Hook 검색해주세요.'}
              clickEvent={handleItemClick}
            />
          </div>
        </div>
      </div>
      {selectData && (
        <MoreLinkModal
          data={selectData}
          onClose={onModalClose}
        />
      )}
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

}`;
