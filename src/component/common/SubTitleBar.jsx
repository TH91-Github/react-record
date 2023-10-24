import styled from 'styled-components';
import { colors, fonts } from 'component/styled/common/Variable';

const baseSize = "16px";
const SectionTitle = styled.div`
  display: ${props => props.$display || 'block'};
  margin: ${props => props.$margin || '0 0 0 0'};
  padding: ${props => props.$padding || '0 0 0 0'};
  ${props => props.$align && `text-align:${props.$align}`};
`;
const numW = (w) => {
  return `${w}/1.5 `
}
const Tit = styled.p`
  display:inline-block;
  position:relative;
  margin:0;
  padding-left:${ props => props.fontSize || baseSize};
  font-size: ${ props => props.fontSize || baseSize};
  font-family: ${fonts.fontB}
  font-weight: ${ props => props.fontWeight || '600'};
  color: ${props => props.color || colors.textColor};
  &::before { 
    position:absolute;
    top:50%;
    left:${props => props.fontSize ? `calc((${numW(props.fontSize)} / 2) - 1px )` : `calc((${numW(baseSize)} / 2) - 1px )`};
    width: 2px;
    height:${ props => props.fontSize ? `calc(${numW(props.fontSize)})` : `calc(${numW(baseSize)})`};
    background:  ${colors.yellowf5b800};
    transform: translateY(-50%);
    content:"";
  }
  &::after { 
    position:absolute;
    top:50%;
    left:0;
    width: ${ props => props.fontSize ? `calc(${numW(props.fontSize)})` : `calc(${numW(baseSize)})`};
    height:2px; 
    background: ${colors.green3cb062};
    transform:translateY(-50%);
    content:"";
  }
`;

function SubTitleBar({children, ...props}){
  return <SectionTitle {...props}>
    <Tit {...props}>
      <span className="title">
      {children}
      </span>
    </Tit>
  </SectionTitle>
}
export default SubTitleBar;
