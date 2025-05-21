import { bgColor, bgShadow, colors, textColor } from "assets/style/variables";
import styled from "styled-components";
import { ComponentsDataType } from "types/guide";
interface ComponentsListsPropsType {
  data: ComponentsDataType[];
  clickEvent: ({id,target}:{id:string, target:HTMLElement}) => void;
}
export const ComponentsLists = ({data, clickEvent} : ComponentsListsPropsType) => {
  const handleMoveClick = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    clickEvent({id, target: e.currentTarget});
  };

  return(
    <StlyeWrap className="componetns-lists">
      {data.length > 0 ?(
        <ul>
          { data.map((item, idx) => (
            <li key={idx} className="item">
              <button
                type="button"
                className="item-preview"
                title={`${item.title} 자세히 보기`}
                onClick={handleMoveClick(item.id)}
                data-id={item.id}
              >
                <span className="tag">{item.category}</span>
                <p className="tit">{item.title}</p>
                <p className="desc">{item.desc}</p>
                <p className="update">업데이트 : <span>{item.update}</span></p>
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
  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    & > li {
      width: calc((100% - 60px) / 4);
    }
  }
  .tag {
    display:inline-block;
    padding:3px 5px;
    border-radius:5px;
    background: #fff;
    font-size:14px;
    color: ${colors.mSlateBlue};
  }
  .item-preview{
    display: block;
    position:relative;
    width:100%;
    padding:10px;
    border:1px solid transparent;
    border-radius:5px;
    background:${bgColor.sideWite};
    box-shadow: ${bgShadow.base};
    transition: border-color var(--transition), background-color var(--transition);
    text-align:left;
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
  }
  .preivew{ 
    margin-top:10px;
  }
  .update{
    margin-top:10px;
    font-size:12px;
    color:${textColor.subText};
  }
`;

