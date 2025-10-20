import { colors } from "assets/style/variables";
import { IconOutLink } from "assets/svg/icons";
import styled from "styled-components";

interface OutLinkPropsType{
  href: string;
  alt?:string;
  titleText: string;
  customClass?: string;
};

export const OutLink = ({
   href, alt, titleText, customClass 
}: OutLinkPropsType) => {
  return (
    <StlyeWrap
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${alt || titleText} 새 창`}
      className={customClass}
    >
      <span>{titleText}</span>
      <span className="icon"><IconOutLink /></span>
    </StlyeWrap>
  )
};

const StlyeWrap = styled.a`
display:inline-flex;
align-items: center;
gap:5px;
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
.icon{
  width:20px;
  height:20px;
}
`;