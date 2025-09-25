import { bgColor, bgShadow, colors, textColor } from "assets/style/variables";
import styled from "styled-components"

interface BadgeItemUIPropsType {
  id:string;
  tag: string;
  title:string;
  desc?:string;
  update?:string;
}
export const BadgeItemUI = ({
  id, tag, title, desc, update
}:BadgeItemUIPropsType) =>{ 
  return (
    <StyleWrap data-id={id}>
      <span className="tag">{tag}</span>
      <p className="tit">{title}</p>
      <p className="desc">{desc}</p>
      <p className="update">업데이트 : <span>{update}</span></p>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
display: block;
position:relative;
width:100%;
height:100%;
padding:10px 10px 34px 10px;
border:1px solid transparent;
border-radius:5px;
background:${bgColor.sideWite};
box-shadow: ${bgShadow.base};
transition: border-color var(--transition), background-color var(--transition);
text-align:left;
.tag {
  display:inline-block;
  padding:3px 5px;
  border-radius:5px;
  background: #fff;
  font-size:14px;
  color: ${colors.mSlateBlue};
}
.tit{
  margin-top: 10px;
}
.desc {
  margin-top:10px;
  font-size:14px;
}
&:hover, &:focus{
  border-color:${colors.mSlateBlue};
  background-color:#fff;
}
.update{
  position:absolute;
  left:10px;
  bottom:10px;
  font-size:12px;
  color:${textColor.subText};
}
`;