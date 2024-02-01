import styled from "styled-components"
import { forwardRef, useState } from "react";
import { tColors } from "components/ux_th/styled/StyledTH";

export default forwardRef(function ThInput({id,placeholder, maxWidth, error, refNum}, ref){
  const [isFocus, setIsFocus] = useState(false);
  const [val, SetVal] = useState('');
  const focusIn = (e) => {
    setIsFocus(true);
  }
  const focusOut = (e) => {
    !val.length>0 && setIsFocus(false)
  }
  const inputChange = (e) => {
    const nameVal = e.target.value;
    SetVal(nameVal);
  }
  return (
    <InputWrap 
      $maxWidth={maxWidth && maxWidth}
      className={`input-item ${error?'error':''} ${isFocus?'isFocus':''}`}>
      <InputText 
        ref={(el) => ref && (ref.current[refNum ? refNum : 0] = el)}
        id={id}
        className="input"
        $background={tColors.tWhite}
        value={val}
        onFocus={(e) => focusIn(e)}
        onBlur={(e)=> focusOut(e)}
        onChange={(e)=>inputChange(e)}
      /> 
      <span className="placeholder">
        <span>{placeholder ? placeholder : "입력해주세요" }</span>
      </span>
    </InputWrap>
  )
});

const InputWrap = styled.span`
  display:block;
  position:relative;
  ${props => props.$maxWidth && `max-width:${props.$maxWidth}`};
  .placeholder {
    display:inline-block;
    position:absolute;
    top:50%;
    left:10px;
    padding:5px;
    border-radius:3px;
    background:${tColors.tWhite};
    font-size:14px;
    transform: translateY(-50%);
    transition: all .3s;
  }
  &.isFocus {
    .placeholder{
      top:0;
      color:${props => props.$textColor || tColors.tBlue};
    }
  }
  &.error{
    .input{
      border:1px solid ${tColors.tRed};
    }
    .placeholder{
      color: ${tColors.tRed};
    }
  }
`;
const InputText = styled.input.attrs({
  type:'text',
})`
  display:inline-block;
  width:100%;
  height:100%;
  padding:10px 15px;
  border:1px solid ${props => props.$borderColor || tColors.tBlue};
  border-radius:5px;
  background:${props=> props.$background || '#fff'};
  outline:unset;
`;