import styled, {css, keyframes} from 'styled-components';
import { breakpoints, media} from './Variable';


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

export const InnerStyle = styled.div`
  width:100%;
  max-width:${breakpoints.pc}px;
  margin:0 auto;
  padding:0 30px;
  ${media.mo} {
    padding: 0 20px;
  }
`;

export const MotionLR = styled.span`
  display:inline-block;
  animation: LeftRightInfinite 1.5s linear infinite;
  @keyframes LeftRightInfinite {
    from, to { transform:translateX(0) }
    50% {  transform:translateX(5px)}
  }
`;

// css
export const animation =(aniName, t,ttf,d,fm) => css`
  opacity:0;
  animation: ${aniName} ${t ? t : '1'}s ${ttf ? ttf :'ease'} ${d ? d : 0}s ${fm ? fm : 'both'};
`
// keyframes
export const fadeIn = (xy, num) => keyframes`
  0%{
    transform: ${
      xy === '-x'
      ? `translateX(${num ? num*-1 : -50}px)`
      : xy === '-x'
      ? `translateX(${num ? num : 50}px)`
      : xy === '-y'
      ? `translateY(${num ? num*-1 : -50}px)`
      : `translateY(${num ? num : 50}px)`
    };
    opacity:0;
  }
  100%{
    transform: translate(0,0);
    opacity:1;
  }
`;

// transform: translate${xy === 'x' ? 'X' : 'Y'}(${num > 0 ? num : 50}px);
// transform: translate${xy === 'x' ? 'X' : 'Y'}(0);

/*

transform: ${
      `
      ${xy === 'x' && `translateX(${num ? num : 50}px)`};
      ${xy === '-x' && `translateX(${num ? num*-1 : -50}px)`};
      ${xy === 'y' && `translateY(${num ? num : 50}px)`};
      ${xy === '-y' && `translateY(${num ? num*-1 : -50}px)`};
      `
    }


 */