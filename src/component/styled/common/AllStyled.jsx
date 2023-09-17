import styled, {css} from 'styled-components';
import { breakpoints, colors, fonts} from './Variable';

// common 
const MarginPadding = css`
  margin:${props => props.$margin || "0"};
  padding:${props => props.$padding || "0"};
`;
const flexOption = css`
  display:flex;
  flex-wrap:wrap;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content : ${props => props.$justifyConent || 'flex-start'}; 
`;

// ♣ Base Css
export const Blind = styled.span`
  position: absolute;
  top: -99999px;
  left: -9999px;
  opacity: 0;
  text-indent: -9999px;
`;
export const colorTag = styled.span`
  ${props => `
    ${props.$color && `color: ${props.$color}`};
    ${props.$bg && `background: ${props.$bg}`};
  `}
`;
// ♣ ICON
export const Icon = styled.i`
  display:inline-block;
  position:relative;
  width: ${props => props.width || "20px"};
  height: ${props => props.width || "20px"};
  border-radius: ${props => props.$borderRadius || 0};
  ${props => props.$bg 
    && 
    `
      background: ${props.$bg};
      border:1px solid ${props.$bg};
    `
  };
`;
// ♣ Tag 
export const Div = styled.div`
  ${MarginPadding}
  ${props => props.$bg && `background:${props.$bg};`}
`;

export const A = styled.a`
  ${props => `
    ${props.$display
      ? props.$display === 'flex' 
        ? `
          display:flex;
          align-items: center;
        `
        : props.$display
      : 'display:inline-block;'       
    }
  `}
  color: ${props => props.color || colors.textColor};
  line-height:initial;
`;

export const Input = styled.input`
  display:inline-block;
  padding: ${props => props.$padding || '2px'};
  border: ${props => props.$border || `1px solid ${colors.textColor}`};
  font-size: ${props => props.fontSize || fonts.size};
  color: ${props => props.color || colors.textColor };
`;

export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
`;

export const ButtonB = styled(Button)`
  padding: ${props => props.$padding || '2px'};
  border: ${props => props.$border || `1px solid ${colors.textColor}`};
  font-size: ${props => props.fontSize || fonts.size};
  color: ${props => props.color || colors.textColor };
`; 

export const TextP = styled.p`
  ${MarginPadding}
  font-size: ${props => props.fontSize || fonts.size};
  font-weight: ${props => props.fontWeight || '550'};
  text-align: ${props => props.$align || 'left'};
  color: ${props => props.color || colors.textColor};
  line-height: ${props => props.$lineHeight || '1.5'};
  & + p { 
    margin-top: 10px;
  }
`;

// ♣ btnWrap
export const BtnWrap = styled.div`
  display: flex;
  ${MarginPadding}
  flex-direction: ${props => props.$flex || "row"};
  gap:${props => props.gap || "10px"};
`;

// ♣ BOX
export const BoxWrap = styled(Div)`
  ${props => 
    props.$display !== undefined
      && ( props.$display === "flex" 
        ? flexOption 
        :`display:${props.$display};`
      ) 
  } 
  position:relative;
  width: ${props => props.$width || '100%'};
`;
export const DivFlex = styled(Div)`
  ${flexOption}
`;
// inner
export const BoxInner = styled.div`
  position:relative;
  width:${props => props.$width || '100%'};
  ${props => !props.$full && `max-width: ${props.$maxWidth || breakpoints.table+'px'}`};
  margin: ${props => props.$margin || "0 auto"};
  padding:${props => props.$padding || "0"};
`;

// line 
export const BoxLine = styled(Div)`
  position:relative;
  ${props => `
    ${props.$width && `width : ${props.$width}`};
    ${props.$maxWidth && `max-width : ${props.$maxWidth}`};
    ${props.$height && `height : ${props.$height}`};
    ${!(props.$top || props.$right || props.$bottom || props.$left) && `border:1px solid ${colors.lineColor}`};
    ${props.$borderRadius && `border-radius:${props.borderRadius}`};
    ${props.$top && `border-top:1px solid ${colors.lineColor}`};
    ${props.$right && `border-right:1px solid ${colors.lineColor}`};
    ${props.$bottom && `border-bottom:1px solid ${colors.lineColor}`};
    ${props.$left && `border-left:1px solid ${colors.lineColor}`};
    ${props.$borderWidth && `border-width: ${props.$borderWidth}`};
    ${props.$borderColor && `border-color: ${props.$borderColor}`};
  `}
`;

export const UlFlex = styled.ul`
  ${flexOption}
  ${MarginPadding}
  ${props => props.$gap && `gap: ${props.$gap};`}
`;

export const ColorChip = styled(Div)`
  ${props => `
    ${props.$width && `width: ${props.$width}`};
    ${props.$maxWidth && `max-width: ${props.$maxWidth}`};
    ${props.$height && `height: ${props.$height}`};
    ${props.$borderRadius && `border-radius: ${props.$borderRadius}`};
  `}
  border:1px solid ${colors.lineColor};
`;



// ♣ Sns 
export const SnsList = styled(Div)`
  display:${props => props.$display || 'flex'};
  justify-content: ${props => props.$justifyContent || "flex-start"};
  font-size:0;
  gap:${props => props.$gap || 0 };
`;
export const SnsBoxText = styled(Div)`
  display: ${props => props.$display || 'block'};
  ${props => props.$lineHeight && `line-height:${props.$lineHeight}`};
`
export const SnsText = styled.span`
  display:inline-block;
  ${MarginPadding}
  font-size:${props => props.fontSize || '16px'};
  color:${props => props.color || colors.textColor};
  line-height:initial;
`;

// ♣ badge
export const Badge = styled.span`
  display:inline-block;
  padding:3px 5px;
  border-radius:3px;
  font-weight:550;
  text-shadow: 0 1px 2px #000;
  background:#000;
  color:${props => props.color || "#ffffff"};
`;
export const ReactBadge = styled(Badge)`
  background:#61DAFB;
`;
export const VueBadge = styled(Badge)`
  background:#20C997;
`;
export const JSBadge = styled(Badge)`
  background:#F7DF1E;
`;
export const JQueryBadge = styled(Badge)`
  background:#0769AD;
`;
export const HTMLBadge = styled(Badge)`
  background:#E34F26;
`;
export const CSSBadge = styled(Badge)`
  background:#30ace0;
`;
export const SCSSBadge = styled(Badge)`
  background:#CC6699;
`;
export const PSBadge = styled(Badge)`
  background:#31A8FF;
`;
export const EtCBadge = styled(Badge)`
  background:#000;
  text-shadow: 0 1px 2px #fff;
`;

