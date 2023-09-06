// Svg styled component
import styled from 'styled-components';
import {TextP} from "component/styled/common/Common";
import {colors} from 'component/styled/common/Variable';




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