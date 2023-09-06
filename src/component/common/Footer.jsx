// Svg styled component
import styled from 'styled-components';
// import * as S from "component/styled/common/Common";
import {colors} from 'component/styled/common/Variable';



const TextP = styled.p`
  text-align: ${props => props.align || "left"};
  color: ${props => props.color || colors.black};
  & + p { 
    margin-top: 10px;
  }
`;

function Footer () {
  const Footer = styled.div`
    position:realtive;
    padding:30px;
    background: ${colors.subBlack};
  `;

  return (
    <Footer>
      <TextP fontSize="14px;"color="#fff">T.H.</TextP>
    </Footer>
  )
}
export default Footer;