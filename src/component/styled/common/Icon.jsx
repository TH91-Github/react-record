import styled from 'styled-components';


const Icon = styled.i`
  display:inline-block;
  position:relative;
  width: ${props => props.width || "20px"};
  height: ${props => props.width || "20px"};
`;

function TitleBar({children, ...props}){
  return <Icon {...props}>{children}</Icon>
}
export default TitleBar;
