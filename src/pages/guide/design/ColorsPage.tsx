import { textColor } from "assets/style/variables";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components";


export const ColorsPage = () => {
  return (
    <StyleWrap>
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Color System'}
          pointer="underline"
          $fontSize={28}
        />
        <ul className="bullet-lists">
          <li className="desc circle">사용하는 색상의 일관성을 유지하기 위해 정의</li>
          <li className="desc circle">파일 경로 : /src/assets/style/variables.ts</li>
        </ul>
      </div>
      <div className="section-wrap">
        <div className="section-item">
          <TitlePoint 
            $display="block"
            titleTag="h5"
            titleText={'주요 사용 색상'}
            pointer="circle"
            $fontSize={28}
          />
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .bullet-lists{
    margin-top:20px;
  }
  .section-wrap{
    margin-top:20px;
  }
`;