import { colors } from "assets/style/variables";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components";

export const FontsPage = () => {
  return (
    <StyleWrap>
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Typography System'}
          pointer="underline"
          $fontSize={28}
        />
        <ul className="bullet-lists">
          <li className="desc circle">사용하는 글꼴 스타일을 쉽게 확인하고 사용하기 위해</li>
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