import styled from 'styled-components';

const BaseBtn = styled.button`
  display:inline-block;
  font-size: ${props => props.fontSize || "16px"};
  color: ${props => props.color || "#000"};
  box-sizing:border-box;
`

function Btn({children, ...props}){
  return <BaseBtn {...props}>{children}</BaseBtn>
}
export default Btn;