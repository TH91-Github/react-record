import { bgColor, colors, textColor } from "assets/style/variables"
import styled from "styled-components"
import { ComponentsDataType } from "types/guide"
import { PreviewBox } from "./PreviewBox"

interface ComponentsListsPropsType {
  data: ComponentsDataType[]
}

export const ComponentsLists = ({data} : ComponentsListsPropsType) => {
  console.log(data)

  return(
    <StlyeWrap className="componetns-lists">
      {data.length > 0 ?(
        <ul>
          { data.map((item, idx) => (
            <li key={idx} className="item">
              <div className="item-preview">
                <span className="tag">{item.category}</span>
                <p className="tit">{item.title}</p>
                <div className="preivew">
                  <PreviewBox id={item.id}/>
                </div>
                <p className="update">업데이트 : <span>{item.update}</span></p>
              </div>
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
    position:relative;
    padding:10px;
    border-radius:5px;
    background:${bgColor.sideWite};
    .tit{
      margin-top: 10px;
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

