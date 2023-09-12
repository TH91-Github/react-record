import styled from 'styled-components';
import { colors, font } from './Variable';

const BaseBtn = styled.button`
  display:inline-block;
  border: ${props => props.$border || `1px solid ${colors.textColor}`};
  font-size: ${props => props.fontSize || font.size};
  color: ${props => props.color || colors.textColor };
  box-sizing:border-box;
`;

function Btn({children, ...props}){
  return <BaseBtn {...props}>{children}</BaseBtn>
}
export default Btn;