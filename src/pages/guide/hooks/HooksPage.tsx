import { Modal } from "components/common/Modal";
import { hooksData } from "components/pages/guide/data/hooksData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TabSearchLists } from "components/pages/guide/TabSearchLists";
import { TitleHeading } from "components/ui/TitleHeading";
import { useState } from "react";
import styled from "styled-components";
import { GuideFilterDataType } from "types/guide";

export const HooksPage = () => {
  const [selectData, setSelectData] = useState<GuideFilterDataType | null>(null); 
  const handleItemClick = (ID: string) =>{
    const findItem = hooksData.find(item => item.id === ID)
    setSelectData(findItem || null)
  }

  const handleModalClose = () => {
    setSelectData(null);
  }
  return (
    <StyleWrap className="hook">
      <GuidePageHeading />
      <div className="content-wrap">
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
        <Modal onClose={() => handleModalClose()}>
          <p className="tit">Hooks TEST</p>
        </Modal>
      )}
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .search-wrap{
    display:flex;
    justify-content: space-between;
  }
 
  
  .hook-lists{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    & > li {
      width: calc((100% - 60px) / 4);
    }
  }
`;