import styled from 'styled-components';
import { colors } from './Variable';


export const A = styled.a`
  display:inline-block;
  color: ${props => props.color || colors.black};
`;
