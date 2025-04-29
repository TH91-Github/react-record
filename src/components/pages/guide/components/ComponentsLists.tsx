import { bgColor, bgShadow, colors, textColor } from "assets/style/variables"
import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { prevFocus } from "recoil/atoms"
import styled from "styled-components"
import { ComponentsDataType } from "types/guide"
interface ComponentsListsPropsType {
  data: ComponentsDataType[]
}
export const ComponentsLists = ({data} : ComponentsListsPropsType) => {
  const navigate = useNavigate();
  const setPrevFocus = useSetRecoilState(prevFocus);

  const handleMove = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    setPrevFocus(e.currentTarget);  // 클릭한 버튼 저장
    navigate(`view/${id}`);
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
                onClick={handleMove(item.id)}
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
    border-radius:5px;
    background:${bgColor.sideWite};
    box-shadow: ${bgShadow.base};
    text-align:left;
    .tit{
      margin-top: 10px;
    }
    .desc {
      margin-top:10px;
      font-size:14px;
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

