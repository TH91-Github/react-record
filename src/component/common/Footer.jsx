// Svg styled component
import styled from 'styled-components';
import * as S from "component/styled/common/AllStyled";
import {colors} from 'component/styled/common/Variable';


const FooterWrap = styled.div`
  position:relative;
  padding:30px;
  background: ${colors.subBlack};
`;

function Footer () {
  return (
    <FooterWrap>
      <S.TextP fontSize="14px;"color="#fff">T.H.</S.TextP>
    </FooterWrap>
  )
}
export default Footer;