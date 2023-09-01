import styled from 'styled-components';

const Svgtemplate = styled.svg`
  width:100%;
  height:100%;
  fill: ${props => props.color || "#000"};
`;

export function Svg({children, ...props}){
  return <Svgtemplate {...props}>{children}</Svgtemplate>
}
