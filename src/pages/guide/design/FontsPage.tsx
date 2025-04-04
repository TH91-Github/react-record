import { colors } from "assets/style/variables";
import InputText from "components/common/InputText";
import { TitlePoint } from "components/ui/TitlePoint";
import { useState } from "react";
import styled from "styled-components";

const DEFAULT_TEXT = 'Pretendard 굵기 미리보기입니다.';
export const FontsPage = () => {
  const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const [fontValue, setFontValue] = useState(DEFAULT_TEXT);

  const handleChange = (val:string) =>{
    
    setFontValue(val ? val : DEFAULT_TEXT);
  }

  return (
    <StyleWrap className="font-guide">
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
          <li className="desc circle">Pretendard 프리텐다드 사용: PretendardVariable</li>
          <li className="desc circle">default weight : <span className="color">500</span></li>
        </ul>
      </div>
      <div className="section-wrap">
        <div className="section-item">
          <TitlePoint 
            $display="block"
            titleTag="h5"
            titleText="Pretendard 굵기 미리보기"
            pointer="circle"
            $fontSize={20}
          />
          <div className="text-change">
            <p className="tit">확인하고 싶은 글자 <br />미리보기 </p>
            <InputText 
              id="font-input"
              changeEvent={handleChange} 
              placeholder={DEFAULT_TEXT}
              styleOpt={{$defaultLine:true}}
            />
          </div>
          <div className="weight-preview">
            <ul>
              {fontWeights.map((item, idx) =>(
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