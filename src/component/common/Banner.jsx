import styled from 'styled-components';
import { colors } from 'component/styled/common/Variable';

const BannerWrap = styled.div`
  display:flex;
  align-items:center;
  ${props => props.$center && `justify-content:center;`}
  padding:0 30px;
  min-height:200px;
  background: ${props => props.$bg || colors.bgGreen};
  ${props => props.$align && `text-align:${props.$align}`}; 
  color:#fff;
`;

function Banner({children, ...props}){
  return (
    <BannerWrap {...props}>
      {
        props.$center
        ?
        <div>
          {children}
        </div>
        :children
      }
    </BannerWrap>
  )
}
export default Banner;