import { buttonData } from "components/pages/guide/data/uiData";
import { ButtonCaseLists } from "components/pages/guide/ui-elements/ButtonCaseLists";
import { TitleHeading } from "components/ui/TitleHeading";
import { TitlePoint } from "components/ui/TitlePoint";
import { useRecoilValue } from "recoil";
import { stateIsMobile } from "recoilStore/atoms";
import styled from "styled-components";

export const ButtonPage = () => {
  const isMobile = useRecoilValue(stateIsMobile);
  const {headData, bodyData} = buttonData;

  return(
    <StyleWrap>
      <TitleHeading 
        $display="block"
        titleTag="h3"
        titleText={headData.title} 
        pointer="underline"
        $fontSize={isMobile ? 24 : 28}
        desc={headData.desc}
      />
      <div className="section-wrap">
        {
          bodyData.map((item, idx) => (
            <div className="section-item" key={idx}>
              <TitlePoint 
                $display="block"
                titleTag="h4"
                titleText={item.title}
                pointer="circle"
                $fontSize={20}
              />
              {item.desc?.map((descItem, descIdx) => (
                <p key={descIdx} className="desc">{descItem}</p>
              ))}
              <ButtonCaseLists 
                data={item.lists}
              />
            </div> 
          ))
        }
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
.button-lists {
  margin-top:30px;
}
`;
