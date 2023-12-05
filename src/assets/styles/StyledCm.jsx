import styled, {css} from 'styled-components';
import { breakpoints, colors, fonts} from './Variable';


export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
`;
