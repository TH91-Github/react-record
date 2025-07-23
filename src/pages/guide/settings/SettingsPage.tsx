import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TitleHeading } from "components/ui/TitleHeading";
import styled from "styled-components";


export const SettingsPage = () => {
  return (
    <StyleWrap className="settings">
      <GuidePageHeading />
      <div className="content-wrap">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText={'Settings'} 
          pointer="underline"
          $fontSize={28}
          desc={['준비 중']}
        />
        <div className="section-wrap">
          <div className="section-item">
            준비 중입니다.
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;