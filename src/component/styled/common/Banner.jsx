import styled from 'styled-components';
import { colors } from './Variable';

const BannerWrap = styled.div`
  display:flex;
  align-items:center;
  ${props => props.$center && `justify-content:center;`}
  padding:0 30px;
  min-height:200px;
  background: ${props => props.$bg || colors.$bgColor};
  color:#fff;
`;

function Banner({children, ...props}){
  return <BannerWrap {...props}>{children}</BannerWrap>
}
export default Banner;