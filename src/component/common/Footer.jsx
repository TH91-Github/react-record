// Svg styled component
import styled from 'styled-components';
import * as S from "component/styled/common/Common";
import {colors} from 'component/styled/common/Variable';
function Footer () {

  const Footer = styled.div`
    position:realtive;
    padding:30px;
    background: ${colors.subBlack};
  `;

  return (
    <Footer>
      <S.TextP fontSize="14px;"color="#fff">T.H.</S.TextP>
    </Footer>
  )
}
export default Footer;