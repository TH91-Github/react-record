import { Modal } from "components/common/Modal";
import { utilsData } from "components/pages/guide/data/utilsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TabSearchLists } from "components/pages/guide/TabSearchLists";
import { TitleHeading } from "components/ui/TitleHeading";
import { useState } from "react";
import styled from "styled-components";
import { GuideFilterDataType } from "types/guide";

export const UtilsPage = () => {
  const [selectData, setSelectData] = useState<GuideFilterDataType | null>(null); 
  const handleItemClick = (ID: string) =>{
    const findItem = utilsData.find(item => item.id === ID)
    setSelectData(findItem || null)
  }

  const handleModalClose = () => {
    setSelectData(null);
  }
  return (
    <StyleWrap>
      <GuidePageHeading />
      <div className="content-wrap">
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
          <Modal onClose={() => handleModalClose()}>
            <p className="tit">Utils TEST</p>
          </Modal>
        )}
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;