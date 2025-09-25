import { bgShadow, colors, ellipsisStyle, textColor, transitionStyle } from "assets/style/variables";
import { IconChat, IconHome, IconMapPoint } from "assets/svg/icons";
import styled from "styled-components";
import { HubItemType } from "types/hub/hub";

export const CategoryHubItem = ({ data }:{data:HubItemType}) => {

  const categoryIcon = (): JSX.Element => {
    switch (data.code) {
      case 'normal':
        return <IconHome />;
      case 'travel':
        return <IconMapPoint />;
      default:
        return <IconChat />;
    }
  };

  return ( 
    <StyleWrap className="category-hub">
      <span className="code">{data.code}</span>
      <p className="tit">{data.title}</p>
      <div className="icon-total">
        <span className="icon">{categoryIcon()}</span>
        <span className="total">{data.total}</span>
      </div>
      <p className="desc">{data.desc}</p>
    </StyleWrap>
  )
};

const StyleWrap = styled.div`
overflow:hidden;
position:relative;
width:300px;
height:180px;
padding:15px 20px;
border-radius:5px;
border:1px solid #fff;
background-color:#fff;
box-shadow:${bgShadow.base};
background:#fff;
${transitionStyle(["opacity", "transform"])};
.code { 
  font-size:14px;
  font-weight:600;
  color:${colors.blue};
}
.tit {
  font-size:18px;
  ${ellipsisStyle(1,23)}
}
.icon-total {
  display:flex;
  align-items:center;
  gap:20px;
  margin-top:10px;
  padding:0 10px;
  & > span { 
    display:block;
  }
}
.icon {
  position:relative;
  width:25px;
  height:25px;
  color:${colors.blue};
}
.total{
  font-size:20px;
}
.desc {
  margin-top:15px;
  font-size:14px;
  font-weight:500;
  color: ${textColor.subText};
  ${ellipsisStyle(2,18)}
}
`;