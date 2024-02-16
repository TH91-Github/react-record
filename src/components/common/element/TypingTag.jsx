import styled from "styled-components";
import Typing from "./Typing";
import { useEffect, useState } from "react";
/*
 titData: 텍스트 데이터 (배열 값으로 전달 -> 추후 배열, 일반 텍스트 맞게 처리)
 view : 시작 시점
 typingOpt : 폰트 size, weight, typing speen, dark(color)
 delay: 시작 후 몇 초 후에 
 endTag: 텍스트 입력 시 닫기 태그 사용 여부
 endFunc: 텍스트 입력 후 반환
 fadeIn: 아래에서 위로 모션
*/
function TypingTag({titData, view, typingOpt, delay, endTag, endFunc, fadeIn}){
  const [typeingOn, setAniOn] = useState(false);
  const closed = endTag ?? true;

  useEffect(()=>{ 
    if(view){
      setTimeout(()=>{
        setAniOn(true);
      },delay ?? 1500)
    } 
  },[view, delay])
  return (
    <TitleTag className={`tag `+ (view ? 'ani': '')} 
      $fontSize={typingOpt.fontSize} 
      $fontWeight={typingOpt.fontWeight}
      $animation={fadeIn ?? true}
      $dark = {typingOpt.dark ?? false}>
        {
          view && <>
            &lt;
            { 
              typeingOn && 
                <Typing 
                  typingData={titData ?? ["TEST"]} 
                  inputS={typingOpt.speed} 
                  completion={endFunc} /> 
            }
            {
              closed ? ` /`
              : !typeingOn && ` /`
            }
            &gt;
          </>
        }
    </TitleTag>
  )
}
export default TypingTag;

const TitleTag = styled.p`
  display:inline-block;
  font-size:${props => props.$fontSize || '18px'};
  font-weight:${props => props.$fontWeight || '500'};
  line-height:1.5;
  color:${props => props.$dark ? '#fff' : '#000' };
  &.ani{
    ${props => props.$animation 
      && 
      `
        opacity:0;
        animation: fadeIn 1.5s .3s both;
        @keyframes fadeIn {
          0% {
            transform: translateY(50px);
            opacity:0;
          }
          100% {
            transform: translateY(0);
            opacity:1;
          }
        }
      `
    };
  }
`;