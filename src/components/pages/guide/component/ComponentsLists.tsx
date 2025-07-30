import { bgColor, bgShadow, colors, textColor } from "assets/style/variables";
import { BadgeItemUI } from "components/ui/BadgeItemUI";
import styled from "styled-components";
import { ComponentsDataType } from "types/guide";
interface ComponentsListsPropsType {
  data: ComponentsDataType[];
  clickEvent: (pathID:string) => void;
}
export const ComponentsLists = ({data, clickEvent} : ComponentsListsPropsType) => {
  const handleMoveClick = (pathID: string) => () => {
    clickEvent(pathID);
  };

  return(
    <StlyeWrap className="componetns-lists">
      {data.length > 0 ?(
        <ul>
          { data.map((item, idx) => (
            <li key={idx} className="item">
              <button
                type="button"
                className="item-btn"
                title={`${item.title} 자세히 보기`}
                onClick={handleMoveClick(item.id)}
                data-id={item.id}
              >
                <BadgeItemUI
                  id={item.id} 
                  tag={item.category}
                  title={item.title}
                  desc={item.desc}
                  update={item.update}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-wrap">
          <p className="text">일치하는 정보를 가져오지 못 했습니다. 🥹</p>
        </div>
      )}
    </StlyeWrap>
  )
}
const StlyeWrap = styled.div`
  margin-top:20px;
  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    & > li {
      width: calc((100% - 60px) / 4);
    }
  }
  .item-btn{
    display: block;
    position:relative;
    width:100%;
    height:100%;
  }
  .preivew{ 
    margin-top:10px;
  }
  .empty-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:300px;
    border-radius:10px;
    box-shadow:${bgShadow.base};
  }
`;

