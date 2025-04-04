import { colors } from "assets/style/variables";
import { designData } from "components/pages/guide/data/designData";
import { ColorChip } from "components/ui/ColorChip";
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
        {
          designData.map((item, idx) => (
            <div className="section-item" key={idx}>
              <TitlePoint 
                $display="block"
                titleTag="h5"
                titleText={item.title}
                pointer="circle"
                $fontSize={20}
              />
              <p className="desc">{item.id}.key</p>
              {
                item.desc?.map((descItem, descIdx) => (
                  <p key={descIdx} className="desc">{descItem}</p>
                ))
              }
              <ColorChip data={item.lists} />
              
            </div>
          ))
        }
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .bullet-lists{
    margin-top:20px;
  }
  .section-wrap{
    margin-top:30px;
    border-top: 1px solid ${colors.lineBlack};
  }
  .section-item {
    margin-top:30px;
    .desc{
      margin-top:10px;
    }
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
  }
  
  .color-chip{
    margin-top:20px;
  }
`;