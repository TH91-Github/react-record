import styled from 'styled-components';
import { colors } from './common/Variable';


const baseSize = "18px";
const SectionTitle = styled.div`
  display: ${props => props.$display || "block"};
  margin: ${props => props.$margin || "0 0 0 0"};
  padding: ${props => props.$padding || "0 0 0 0"};
  text-align: ${props => props.$align || "left"};
`;
const Tit = styled.p`
  display:inline-block;
  position:relative;
  margin-left: ${ props => props.fontSize ? `calc(${props.fontSize}/2.5)` : `calc(${baseSize}/2.5)`};
  font-size: ${ props => props.fontSize || baseSize};
  font-family: var(--font-NanumGithicB);
  font-weight: ${ props => props.fontWeight || '550'};
  ${ props => props.color && `
    color: ${props.color}
  `};
  &::before { 
    position:absolute;
    top: ${ props => props.fontSize ? `calc(${props.fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    right: ${ props => props.fontSize ? `calc(${props.fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    width: ${ props => props.fontSize || baseSize};
    height:2px;
    background:  ${colors.color2};
    transform: rotate(45deg) translateX(50%);
    content:"";
  }
  &::after { 
    position:absolute;
    bottom:${ props => props.fontSize ? `calc(${props.fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    left: ${ props => props.fontSize ? `calc(${props.fontSize} / 6 * -1)` : `calc(${baseSize}/6*-1)`};
    width: ${ props => props.fontSize || baseSize};
    height:2px; 
    background: ${colors.color1};
    transform: rotate(45deg) translateX(-50%);
    content:"";
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
