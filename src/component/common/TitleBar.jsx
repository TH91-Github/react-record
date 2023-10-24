import styled from 'styled-components';
import { colors, fonts } from 'component/styled/common/Variable';

const baseSize = `${fonts.size18}px`;
const SectionTitle = styled.div`
  display: ${props => props.$display || 'block'};
  margin: ${props => props.$margin || '0 0 0 0'};
  padding: ${props => props.$padding || '0 0 0 0'};
  ${props => props.$align && `text-align:${props.$align}`};
`;
const Tit = styled.p`
  display:inline-block;
  position:relative;
  margin-left: ${ props => props.$fontSize ? `calc(${props.$fontSize}/2.5)` : `calc(${baseSize}/2.5)`};
  font-size: ${ props => props.$fontSize || baseSize};
  font-family: ${fonts.fontB};
  font-weight: ${ props => props.$fontWeight || '550'};
  color: ${props => props.$color || colors.textColor};
  &::before { 
    position:absolute;
    top: ${ props => props.$fontSize ? `calc(${props.$fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    right: ${ props => props.$fontSize ? `calc(${props.$fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    width: ${ props => props.$fontSize || baseSize};
    height:2px;
    background:  ${colors.yellowf5b800};
    transform: rotate(45deg) translateX(50%);
    content:"";
  }
  &::after { 
    position:absolute;
    bottom:${ props => props.$fontSize ? `calc(${props.$fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    left: ${ props => props.$fontSize ? `calc(${props.$fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    width: ${ props => props.$fontSize || baseSize};
    height:2px; 
    background: ${colors.green3cb062};
    transform: rotate(45deg) translateX(-50%);
    content:"";
  }
  &>span{
    font-family:inherit;
    color:inherit;
  }
`;

function TitleBar({children, ...props}){
  return <SectionTitle {...props}>
    <Tit {...props}>
      <span className="title">
      {children}
      </span>
    </Tit>
  </SectionTitle>
}
export default TitleBar;
