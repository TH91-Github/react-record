import { colors } from "assets/style/variables";
import { InputText } from "components/common/InputText";
import { fontsData } from "components/pages/guide/data/designData";
import { TitleHeading } from "components/ui/TitleHeading";
import { TitlePoint } from "components/ui/TitlePoint";
import { useState } from "react";
import styled from "styled-components";

const DEFAULT_FONT_TEXT = 'Pretendard 굵기 미리보기입니다.';
export const FontsPage = () => {
  const {headData, bodyData} = fontsData;
  const [fontValue, setFontValue] = useState(DEFAULT_FONT_TEXT);

  const handleChange = (val:string) =>{
    setFontValue(val ? val : DEFAULT_FONT_TEXT);
  }

  return (
    <StyleWrap className="font-guide">
      <TitleHeading 
        $display="block"
        titleTag="h3"
        titleText={headData.title} 
        pointer="underline"
        $fontSize={28}
        desc={headData.desc}
      />
      <div className="section-wrap">
        <div className="section-item">
          <TitlePoint 
            $display="block"
            titleTag="h4"
            titleText="Pretendard 굵기 미리보기"
            pointer="circle"
            $fontSize={20}
          />
          <div className="text-change">
            <p className="tit">확인하고 싶은 글자 <br />미리보기 </p>
            <InputText 
              id="font-input"
              changeEvent={handleChange} 
              placeholder={DEFAULT_FONT_TEXT}
            />
          </div>
          <div className="weight-preview">
            <ul>
              {bodyData.map((item, idx) =>(
                <li key={idx}>
                  <span className={`tit ${item === 500 ? 'color':''}`}>weight - {item}</span>
                  <FontWeight $weight={item}>{fontValue}</FontWeight>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .text-change{
    display:flex;
    align-items:center;
    gap:10px;
    margin-top:30px;
    .tit{
      width:140px;
      flex-shrink:0;
    }
    .input-item{
      height:auto;
    }
  }
  .weight-preview {
    margin-top:30px;
    li {
      display:flex;
      gap:10px;
      align-items:center;
      margin-top:10px;
      font-size:18px;
      &:first-child{
        margin-top:0;
      }
      &.on {
        .tit {
          color:${colors.mSlateBlue};
        }
      }
    }
  }
`;

interface FontWeightType {
  $weight:number;
}
const FontWeight =  styled.span<FontWeightType>`
  font-weight:${({$weight}) =>$weight};
`;  