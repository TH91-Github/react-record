import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components"

export const ButtonPage = () => {
  return(
    <StyleWrap>
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Button System'}
          pointer="underline"
          $fontSize={28}
        />
        <ul className="bullet-lists">
          <li className="desc circle">공통적으로 사용하는 버튼 리스트</li>
          <li className="desc circle">목적에 따라 버튼 스타일 제공</li>
          <li className="desc circle">button 컴포넌트 사용 ❌, <span className="color">class</span>로 제어</li>
        </ul>
      </div>
      <div className="section-wrap">

      </div>
    </StyleWrap>  
  )
}

const StyleWrap = styled.div`

`;
