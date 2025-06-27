import { colors, textColor } from "assets/style/variables"
import { InputText, InputTextRefType } from "components/common/InputText"
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react"
import styled from "styled-components"
import { cn } from "utils/common"

// 🔹 포커스 타이틀 스타일 input module
interface InputItemModulePropsType {
  id:string
  type?: 'text' | 'password'
  title?:string
  essential?: boolean
  isError?: boolean
  barStyle?:boolean // 앞쪽 bar 형태 style
  focusColor?: string
  focusEvent?: () => void
  blurEvent?: (e:React.FocusEvent<HTMLInputElement>) => void
}

export interface InputItemModuleRefType {
  refModuleEl: () => HTMLInputElement | null;
}

export const InputItemModule = forwardRef<InputItemModuleRefType, InputItemModulePropsType>(function InputItemModule({
  id, type = 'text', title, essential, isError, barStyle, focusColor,
  focusEvent, blurEvent
}: InputItemModulePropsType, ref ) {
  const inputRef = useRef<InputTextRefType>(null);
  const [inputState, setInputState] = useState({
    isFocus:false,
    isError:false,
  }) 

  const focusInOut = useCallback((isFocus:boolean) => {
    const inputVal = inputRef.current!.refInputValue();
    setInputState(prev => ({
      ...prev,
      isFocus: inputVal.length > 0 ? true : isFocus,
    }));
  },[]);
  
  const handleFocus = () => {
    focusInOut(true);
    focusEvent && focusEvent()
  }

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
    focusInOut(false);
    blurEvent && blurEvent(e);
  } 

  useImperativeHandle(ref, () => ({
    refModuleEl: () => { // input 반환
      return inputRef.current?.refInputEl() ?? null
    },
  }));
    
  return (
    <StyleWrap 
      className={cn('input-item', inputState.isFocus && 'focus-in', barStyle && 'bar')}
      $focusColor={focusColor ?? colors.mSlateBlue}
    >
      {title && (
        <p className="tit">
          <span>{title}</span>
          {essential && <sup>*</sup>}
        </p>
      )}
      <InputText 
        ref={inputRef}
        id={id}
        type={type}
        title={`${title} 입력해주세요.`}
        isError={isError}
        focusEvent={() => handleFocus()}
        blurEvent={(e) => handleBlur(e)}
        styleOpt={{$defaultLine:'line-bottom', $focusColor:focusColor}}
      />
    </StyleWrap>
  )
});
interface StyleWrapType { 
  $focusColor:string
}
const StyleWrap = styled.div<StyleWrapType>`
  position:relative;
  margin-top:25px;
  font-size: 16px;
  .tit {
    position:absolute;
    top:50%;
    left:10px;
    font-size:1em;
    color:${textColor.title};
    transform: translateY(-50%);
    transition: transform var(--transition), font-size var(--transition), color var(--transition);
    & > sup {
      position:absolute;
      top:-2px;
      right:-10px;
      font-size:0.8571428571429em;
      color: ${colors.red};
    }
  }
  &.focus-in {
    font-size:14px;
    .tit{ 
      transform: translate(-10px, -35px);
      color:${({$focusColor}) => $focusColor};
    }
  }
  &.bar {
    padding-left:0px;
    &::before {
      position:absolute;
      top:50%;
      left:0;
      width:4px;
      height:70%;
      border-radius:3px;
      background:${({$focusColor}) => $focusColor};
      transform: translateY(-50%);
      content:'';
    }
    &.focus-in {   
      .tit{ 
        transform: translate(0px, -160%);
      }
    }
  }
`;