import { buttonData } from "components/pages/guide/data/uiData";
import { TitleHeading } from "components/ui/TitleHeading";
import { useRecoilValue } from "recoil";
import { stateUserColor } from "recoil/atoms";
import styled from "styled-components";

export const ButtonPage = () => {
  const pointColor = useRecoilValue(stateUserColor); 
  const {headData} = buttonData;
  return(
    <StyleWrap>
      <TitleHeading 
        $display="block"
        titleTag="h3"
        titleText={headData.title} 
        pointer="underline"
        $fontSize={28}
        desc={headData.desc}
      />
      <div className="section-wrap">

      </div>
    </StyleWrap>  
  )
}

const StyleWrap = styled.div`

`;
