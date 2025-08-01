import { utilsData } from "components/pages/guide/data/utilsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TabSearchLists } from "components/pages/guide/TabSearchLists";
import { TitleHeading } from "components/ui/TitleHeading";
import styled from "styled-components";


export const UtilsPage = () => {

  const handleItemClick = (ID:string) => {

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
        
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;