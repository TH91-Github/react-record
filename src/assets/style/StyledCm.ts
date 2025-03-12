import styled from 'styled-components';

// css

interface ButtonPropsType {
  $width?: string;
  $height?: string;
}

export const Button = styled.button.attrs({
  type:'button',
})<ButtonPropsType>`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
  cursor:pointer;
`;

interface IconPropsType {
  $width?: string;
  $height?: string;
  $borderRadius: string;
  $bg?: string;
}
// ♣ ICON
export const Icon = styled.i<IconPropsType>`
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
