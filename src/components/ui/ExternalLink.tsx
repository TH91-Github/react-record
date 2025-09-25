import { colors } from "assets/style/variables";
import styled from "styled-components";

type ExternalLinkPropsType = {
  href: string;
  alt?:string;
  titleText: string;
  customClass?: string;
};

export const ExternalLink = ({
   href, alt, titleText, customClass 
}: ExternalLinkPropsType) => {
  return (
    <StlyeWrap
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${alt || titleText} 새 창`}
      className={customClass}
    >
      <span>{titleText}</span>
    </StlyeWrap>
  )
};

const StlyeWrap = styled.a`
display:inline-block;
position:relative;
padding-bottom:1px;
&::after{
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:2px;
  border-radius:5px;
  background:${colors.mSlateBlue};
  transform-origin:left;
  transform: scaleX(0);
  transition: transform var(--transition);
  content:'';
}
&:hover, &:focus{ 
  &::after{
    transform: scaleX(1);
  }
}
`;