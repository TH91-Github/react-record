// Svg styled component
import styled from 'styled-components';
import {colors, fonts} from 'component/styled/common/Variable';


const FooterWrap = styled.div`
  position:relative;
  padding:30px;
  background: ${colors.subBlack};
`;
const FooterText = styled.p`
  font-size:${fonts.size14}px;
  color:${colors.baseWhite};
`;
function Footer () {
  return (
    <FooterWrap>
      <FooterText fontSize="14px;"color="#fff">T.H.</FooterText>
    </FooterWrap>
  )
}
export default Footer;