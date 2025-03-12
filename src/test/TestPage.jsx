// ✅ TestPage.jsx -> Parent Component
import { useRef } from "react";
import { TistoryInput } from "./TistoryInput";

export const TestPage = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log(inputRef.current)
    inputRef.current?.focus();
  };
  const inputInit = () => {
    inputRef.current?.init();
  }
  const inputError = () => {
    inputRef.current?.error();
  }
  return( 
    <div className="test-wrap">
      <TistoryInput ref={inputRef} placeholder="티스토리 input" />
      <div className="btns">
        <button 
          type="button"
          onClick={focusInput}
        >
          <span>버튼</span>
        </button>
        <button 
          type="button"
          onClick={inputInit}
        >
          <span>초기화</span>
        </button>
        <button 
          type="button"
          onClick={inputError}
        >
          <span>Error</span>
        </button>
      </div>
    </div>
  )
}