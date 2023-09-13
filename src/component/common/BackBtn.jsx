import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import * as S from "component/styled/common/AllStyled";

const Btn = styled.button`
  ${props => props.$position && `position:${props.$position}`};
  ${props => props.$top && `top:${props.$top}`};
  ${props => props.$right && `right:${props.$right}`};
  ${props => props.$bottom && `bottom:${props.$bottom}`};
  ${props => props.$left && `left:${props.$left}`};
  width: ${props => props.width || "auto"};
  height:${props => props.height || "auto"};
  padding: ${props => props.$padding || "0"};
  border: ${props => props.$border || "none"};
  ${props => props.fontSize && `font-size : ${props.fontSize}`};
`;
function BackBtn({children, ...props}){
  const navi = useNavigate();
  return (
    <S.Btn type="button" {...props} onClick={()=>navi(-1)} title="뒤로가기">
      {children}
    </S.Btn>
  )
}
export default BackBtn;
