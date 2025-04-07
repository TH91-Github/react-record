import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components"

export const IconPage = () => {
  return(
    <StyleWrap>
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Icon System'}
          pointer="underline"
          $fontSize={28}
        />
        <ul className="bullet-lists">
          <li className="desc circle">일관된 아이콘 사용을 위해 사용하는 아이콘 정리</li>
          <li className="desc circle">사용 목적에 따라 SVG(JSX컴포넌트) 또는 이미지(file) 형태로 사용</li>
        </ul>
      </div>
    </StyleWrap>  
  )
}

const StyleWrap = styled.div`

`;
