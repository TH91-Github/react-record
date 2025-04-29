import { bgShadow } from "assets/style/variables";
import styled from "styled-components"

interface PopupPropsType {
  isPop?: boolean;
  $align?: 'center' | 'left' | 'right';
  children?:React.ReactNode;
}
export const Popup = ({
  isPop,
  $align = 'center',
  children
}:PopupPropsType) => {
  const handleEndClick = () => {

  }
  return (
    <StyleWrap 
      className={`popup-wrap`}
      $align={$align}
    >
      <div className="popup-inner">
        {children}
      </div>
      <div className="dimmed" onClick={handleEndClick}></div>
    </StyleWrap>
  )
}

interface StyleWrapProps {
  $align:string
}
const StyleWrap = styled.div<StyleWrapProps>`
  position:fixed;
  z-index:100;
  top:0;
  left:0;
  width:100svw;
  height:100svh;
  text-align: ${({$align}) => $align};
  .dimmed {
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
  }
  .popup-inner{
    position:absolute;
    z-index:101;
    top:50%;
    left:50%;
    padding:30px;
    border-radius:5px;
    background: #fff;
    box-shadow:${bgShadow.base};
    transform: translate(-50%, -50%);
  }
  
`;