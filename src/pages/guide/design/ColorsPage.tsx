import { textColor } from "assets/style/variables";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components";


export const ColorsPage = () => {
  return (
    <StyleWrap>
      <div className="content-headding">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Color System'}
          pointer="underline"
          $fontSize={28}
        />
        <p className="desc">ddd</p>
        <p className="desc">/src/assets/style/V</p>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .desc{ 
    margin-top:15px;
    color:${textColor.desc};
  }
`;