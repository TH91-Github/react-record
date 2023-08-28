import styled from 'styled-components';
import { colors } from './common/common';


const baseSize = "18px";
const SectionTitle = styled.div`
  margin: ${props => props.margin || "0 0 0 0"};
  padding: ${props => props.padding || "0 0 0 0"};
  text-align: ${props => props.align || "center"};
`;
const Tit = styled.p`
  display:inline-block;
  position:relative;
  font-size: ${ props => props.fontSize || baseSize};
  font-family: var(--font-NanumGithicB);
  &::before { 
    position:absolute;
    top:-5px;
    right:-5px;
    width: ${ props => props.size || baseSize};
    height:2px;
    background:  ${colors.color2};
    transform: rotate(45deg) translateX(50%);
    content:"";
  }
  &::after { 
    position:absolute;
    bottom:-4px;
    left:-4px;
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
