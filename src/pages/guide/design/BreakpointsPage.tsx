import { colors } from "assets/style/variables";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components"


export const BreakpointsPage = () => {
  return (
    <StyleWrap>
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Breakpoint System'}
          pointer="underline"
          $fontSize={28}
        />
        <ul className="bullet-lists">
          <li className="desc circle">디바이스 환경에 따라 일관된 레이아웃을 제공하기 위해 정의</li>
          <li className="desc circle">파일 경로 : /src/assets/style/variables.ts</li>
        </ul>
      </div>
      <div className="section-wrap">

      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;