import { forwardRef, useImperativeHandle, useRef, useState } from "react"

export const TistoryInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    init: () => {
      inputRef.current.value = "";
      setError(false);
    },
    error: () => {
      inputRef.current.focus();
      setError(true);
    },
  }));

  return( 
    <div className="input-item">
      <input 
        type="text" 
        ref={inputRef}
        {...props}  
        className={error ? 'error': ''}
      />
      {error && <p className="error-txt">Error</p>}
    </div>
  )
});