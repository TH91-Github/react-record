import styled from "styled-components"
// styled
import * as SC from "component/styled/common/AllStyled";
import { colors, transitions } from "component/styled/common/Variable";

const LiItem = styled.li`
  position:relative;
`;

const ItemBtn = styled(SC.Button)`
  display: grid;
  gap: 5px;
  row-gap: 5px;
  column-gap: 5px;
  grid-template-columns: 30px auto;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 10px 5px 6px 0;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-align: left;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
  &::after {
    position:absolute;
    z-index:-1;
    top:0;
    left:-30px;
    width:30px;
    height:100%;
    background:${colors.yellow};
    transition:${transitions.base};
    opacity:0;
    content:"";
  }
  &:hover, &:focus {
    border-color:${colors.yellow};
    &::after
    {
      left:0;
      opacity:1;
    }
    .order {
      color: ${colors.baseWhite};
    }
  }
`;

const ItemNum = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1 / span 2;
  height: 100%;
  transition: all 0.3s;
`;
const ItemTitle = styled.span`
  display: block;
  font-size: 18px;
  font-family: "NanumGothicBold";
`;
const ItemDesc = styled.span`
  display: block;
  line-height: 1.5;
  color: #868686;
`;
const ListItem = ({propsItem, propsIdx, propsEvent}) => {
  const itemClick = (itemE) => {
    propsEvent(itemE)
  }
  return (
    <LiItem>
      <ItemBtn title="자세히 보기" onClick={()=>{itemClick(propsItem.path)}}>
        <ItemNum className="order">{propsIdx+1}</ItemNum>
        <ItemTitle className="tit">{propsItem.title}</ItemTitle>
        <ItemDesc className="desc">{propsItem.desc}</ItemDesc>
      </ItemBtn>
    </LiItem>
  )
}
export default ListItem;