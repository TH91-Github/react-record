import styled from 'styled-components';

// css

export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
  cursor:pointer;
`;

// ♣ ICON
export const Icon = styled.i`
  display:inline-block;
  position:relative;
  width: ${props => props.$width || "20px"};
  height: ${props => props.$height || "20px"};
  border-radius: ${props => props.$borderRadius || 0};
  ${props => props.$bg 
    && 
    `
      background: ${props.$bg};
      border:1px solid ${props.$bg};
    `
  };
`;
