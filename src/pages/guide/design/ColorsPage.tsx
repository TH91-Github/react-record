import { colors } from "assets/style/variables";
import { colorsData } from "components/pages/guide/data/designData";
import { ColorChip } from "components/ui/ColorChip";
import { TitleHeading } from "components/ui/TitleHeading";
import { TitlePoint } from "components/ui/TitlePoint";
import { useRecoilValue } from "recoil";
import { stateIsMobile } from "recoilStore/atoms";
import styled from "styled-components";

export const ColorsPage = () => {
  const {headData, bodyData} = colorsData
  const isMobile = useRecoilValue(stateIsMobile);

  return (
    <StyleWrap>
      <TitleHeading 
        $display="block"
        titleTag="h3"
        titleText={headData.title} 
        pointer="underline"
        $fontSize={isMobile? 24 : 28}
        desc={headData.desc}
      />
      <div className="section-wrap">
        {bodyData.map((item, idx) => (
          <div className="section-item" key={idx}>
            <TitlePoint 
              $display="block"
              titleTag="h4"
              titleText={item.title}
              pointer="circle"
              $fontSize={20}
            />
            <p className="desc">사용 코드 : {item.id}.<span className="color">key</span></p>
            {item.desc?.map((descItem, descIdx) => (
              <p key={descIdx} className="desc">{descItem}</p>
            ))}
            <ColorChip data={item.lists} keyValue={item.id}/>
          </div>
        ))}
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
.color-opacity{
  position:relative;
  &::before{
    position:absolute;
    top:30px;
    right:0;
    width:10px;
    height:10px;
    border-radius:5px;
    background:${colors.mSlateBlue};
    animation: opacityChcekAni 3s infinite;
    content:'';
  }
  @keyframes opacityChcekAni {
    0%, 100% {
      transform: translateX(0px);
    }
    50%{
      transform: translateX(10px);
    }
  }
}
.color-chip{
  margin-top:30px;
}
`;