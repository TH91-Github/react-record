import { colors, textColor } from "assets/style/variables"
import { InputText, InputTextRefType } from "components/common/InputText"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import styled from "styled-components"
import { cn } from "utils/common"

// 🔹 포커스 타이틀 스타일 input module
interface InputItemModulePropsType {
  id:string
  type?: 'text' | 'password'
  title?:string
  activeColor?:string
}

export interface InputItemModuleRefType {
  refModuleEvent: () => void;
}

export const InputItemModule = forwardRef<InputItemModuleRefType, InputItemModulePropsType>(function InputItemModule({
  id, type = 'text', title, activeColor
}: InputItemModulePropsType, ref ) {
  const inputRef = useRef<InputTextRefType>(null);
  const [inputState, setInputState] = useState({
    isFocus:false,
    isError:false,
  }) 

  const handleFocus = (focusIn:boolean) => {
    const inputVal = inputRef.current!.refInputValue();
    setInputState(prev => ({
      ...prev,
      isFocus: inputVal.length > 0 ? true : focusIn,
    }));
  }

  useImperativeHandle(ref, () => ({
    refModuleEvent: () => { 
      return ''
    },
  }));
    
  return (
    <StyleWrap 
      className={cn('input-item', inputState.isFocus && 'focus-in')}
      $activeColor={activeColor ?? colors.mSlateBlue}
    >
      {title && <p className="tit">{title}</p>}
      <InputText 
        ref={inputRef}
        id={id}
        type={type}
        title={`${title} 입력해주세요.`}
        focusEvent={() => handleFocus(true)}
        blurEvent={() => handleFocus(false)}
        styleOpt={{$defaultLine:'line-bottom', $focusColor:activeColor}}
      />
    </StyleWrap>
  )
});
interface StyleWrapType { 
  $activeColor:string
}
const StyleWrap = styled.div<StyleWrapType>`
  position:relative;
  .tit {
    position:absolute;
    top:50%;
    left:10px;
    font-size: 16px;
    color:${textColor.title};
    transform: translateY(-50%);
    transition: transform var(--transition), font-size var(--transition), color var(--transition); 
  }
  &.focus-in {
    .tit{ 
      font-size:14px;
      transform: translate(-10px, -160%);
      color:${({$activeColor}) => $activeColor};
    }
  }
`;