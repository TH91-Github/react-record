import { colors } from "assets/style/Variable";
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components"

interface InputPropsType {
  name?: string,
  id: string,
  className?: string,
  title?: string,
  placeholder?: string,
  initVal?: string,
  disabled?: boolean,
  inputError?: boolean,
  focusColor?: string,
  maxWidth?: number,
  keyEnter?: () => void,
  changeEvent?: (e: string) => void,
  focusEvent?: () => void,
  removeEvent?: () => void,
  blurEvent?: (e:React.FocusEvent<HTMLInputElement>) => void,
}

interface InputTextRefType {
  refInputEvent: () => HTMLInputElement | null;
  refFocusEvent: () => void;
  refInitVal: (e:string) => void;
  refResetVal: () => void;
}

export default(forwardRef<InputTextRefType, InputPropsType>( function InputText(
  {
    name, id, className, title, placeholder, initVal, disabled, maxWidth, inputError, focusColor,
    keyEnter, changeEvent, focusEvent, blurEvent, removeEvent
  }: InputPropsType, ref ) {

  const [isFocus, setIsFocus] = useState<boolean>(initVal ? true : false);
  const [val, setVal] = useState<string>(initVal ?? "");
  const propsTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusIn = useCallback(() => {
    setIsFocus(true);
    focusEvent && focusEvent();
  }, [focusEvent]);

  const handleFocusOut = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    blurEvent && blurEvent(e);
  }, [blurEvent]);

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && keyEnter && keyEnter();
  }, [keyEnter] );

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setVal(value);
    if (propsTimeRef.current) {
      clearTimeout(propsTimeRef.current);
    }
    propsTimeRef.current = setTimeout(() =>{
      changeEvent && changeEvent(value)
    },500)
  },[changeEvent]);

  const handleValRemove = () => { // 입력 초기화
    setVal('');
    removeEvent && removeEvent();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useImperativeHandle(ref, () => ({ // ref로 시작작
    refInputEvent: () => { // input 반환
      return inputRef.current
    },
    refFocusEvent: () => { // 초기 데이터
      inputRef.current?.focus()
    },
    refInitVal: (value) => { // value 변경
      setVal(value);
    },
    refResetVal: () => { // value 초기화
      setVal('');
    }
  }));
  
  return( 
    <StyleWrap
      className={`input-item${inputError ? ' error' : ''}${isFocus ? ' isFocus' : '' }`}
      $maxWidth={maxWidth ? maxWidth : undefined} 
      $lineColor={focusColor === undefined ? colors.blue: focusColor}
    >
      <input
        ref={inputRef}
        type="text"
        id={id}
        name={name}
        className={`input ${className ? className : ''}`}
        value={val}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        onKeyUp={handleKeyUp}
        onChange={handleOnChange}
        autoComplete="off"
        title={placeholder ? placeholder : (title ?? '입력 해주세요')}
        disabled={disabled}
      />
      {
        (placeholder && val.length === 0) && (
          <span className="placeholder">{ placeholder }</span>
        )
      }
      {
        <button
          type="button"
          className={`remove${val.length > 0 ? ' on':''}`}
          onClick={handleValRemove}>
          <span className="blind">
            입력 삭제
          </span>
        </button>
      }
      
    </StyleWrap>
  )
}));

type StyleProps = {
  $maxWidth?: number,
  $lineColor: string,
};

const StyleWrap = styled.div<StyleProps>`
  display:block;
  overflow:hidden;
  position:relative;
  width:100%;
  ${props => props.$maxWidth && `max-width: ${props.$maxWidth}px;`}
  font-size:14px;
  height:25px;
  line-height:1;
  .input {
    display:block;
    width:100%;
    height:inherit;
    padding:0 10px;
    border:1px solid transparent;
    border-radius:5px;
    background:transparent;
    font-size:inherit;
    transition: border-color .3s;
    outline:0;
    &:disabled + .placeholder{
      color:${colors.subText};
    }
  }
  .placeholder {
    position:absolute;
    top:50%;
    left:10px;
    font-size:inherit;
    line-height:1;
    transform: translateY(-50%);
    pointer-events:none;
  }
  .remove{
    position:absolute;
    top:-999px;
    left:-999px;
  }
    
  &.isFocus {
    .input {
      border-color: ${({$lineColor}) => $lineColor};
    }
  }
`;