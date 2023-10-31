import styled, {css} from 'styled-components';
import { breakpoints, colors, fonts} from './Variable';

// common 
const MarginPadding = css`
  margin: ${props => props.$margin || 0};
  padding: ${props => props.$padding || 0};
  ${props => `
    ${props.$marginTop && `margin-top:${props.$marginTop}`};
    ${props.$marginRight && `margin-right:${props.$marginRight}`};
    ${props.$marginBottom && `margin-bottom:${props.$marginBottom}`};
    ${props.$marginLeft && `margin-left:${props.$marginLeft}`};
    ${props.$paddingTop && `padding-top:${props.$paddingTop}`};
    ${props.$paddingRight && `padding-right:${props.$paddingRight}`};
    ${props.$paddingBottom && `padding-bottom:${props.$paddingBottom}`};
    ${props.$paddingLeft && `padding-left:${props.$paddingLeft}`};
  `}
`;

// css - 유지
const flexOption = css`
  display:flex;
  flex-wrap:wrap;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content : ${props => props.$justifyConent || 'flex-start'}; 
  ${props => `
    ${props.$gap && `gap : ${props.$gap}px`};
    ${props.$size && `
      &>li {width: calc((100% - ${(props.$gap * (props.$size-1))}px) / ${props.$size});}
    `};
  `}
`;

// ♣ button - 유지
export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
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

export const ButtonB = styled(Button)`
  padding: ${props => props.$padding || '2px'};
  border: ${props => props.$border || `1px solid ${colors.textColor}`};
  font-size: ${props => props.fontSize || `${fonts.size}px`};
  color: ${props => props.color || colors.textColor };
`; 

export const TextP = styled.p`
  ${MarginPadding}
  font-size: ${props => props.fontSize || `${fonts.size}px`};
  font-weight: ${props => props.fontWeight || '550'};
  text-align: ${props => props.$align || 'left'};
  color: ${props => props.color || colors.textColor};
  line-height: ${props => props.$lineHeight || '1.5'};
  & + p { 
    margin-top: 10px;
  }
`;

export const TextS = styled.span`
  display: ${props => props.$display || 'inline-block'};
  ${MarginPadding}
  font-size: ${props => props.fontSize || `${fonts.size14}px`};
  font-weight: ${props => props.fontWeight || '500'};
  color: ${props => props.color || colors.subTextColor};
`

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



// ♣l list 검색 키워드 : 목록 dash bar list 아이콘 목록
export const listBarUl = styled.ul`
  ${MarginPadding}
  &>li{
    margin-top:5px;
    padding-left:8px;
    &:first-child{
      margin-top:0;
    }
  }
`;
export const listLi = styled.li`
  position:relative;
  color:${props => props.$bg || colors.textColor};
  &::after{
    position:absolute;
    top:8px;
    left:0;
    content:"";
    background: ${props => props.$bg || colors.textColor};
  }
`
export const liBar = styled(listLi)`
  &::after{ 
    width:4px;
    height:1px;
    top:${props => `${(props.fontSize || fonts.size) -5}px`};
  }
`;

export const liSquare = styled(listLi)`
  &::after{ 
    width:3px;
    height:3px;
  }
`;

export const LiCircle = styled.li`
  position:relative;
  padding-left:10px;
  &::before {
    position:absolute;
    left:0;
    content:'\\22C5';
  }
  &.bold {
    font-weight:bold;
  }
  ${props => props.$bold && `font-weight: bold`};
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



// ♣ 유지할 목록 👇 

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
    ${props.$bg && `background: ${props.$bg}`};
    ${props.fontSize && `font-size: ${props.fontSize}`};
    ${props.$color && `color: ${props.$color}`};
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

// ♣ flex Ul
export const DivFlex = styled.div`
  ${flexOption}
`;

export const UlFlex = styled.ul`
  ${flexOption}
  ${MarginPadding}
`;

export const LineTitle = styled.div`
  padding:15px 20px;
  border-radius:5px;
  border-top-right-radius:0;
  border-bottom-left-radius:0;
  border-left:5px solid ${colors.green3cb062};
  background: ${colors.bgWhite};
`;

export const BarTxt = styled.p`
  position:relative;
  padding-left:10px;
  &::after{
    position:absolute;
    left:0;
    content:"-"
  }
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

