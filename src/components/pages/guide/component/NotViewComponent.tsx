import { SvgArrow } from "assets/svg/Common";
import { NavLink } from "react-router-dom";
import styled from "styled-components"


export const NotViewComponent = () => {
  return(
    <StlyeWrap>
      <div className="heading">
        <h2 className="title">⚠️ 페이지를 불러오는데 실패 했습니다.</h2>
        <p className="txt">
          요청하신 정보를 불러올 수 없어요.. <br />
          잘못된 주소이거나, 해당 정보가 존재하지 않을 수 있어요. 🙇‍♂️
        </p>
        <p className="txt">
          아래 버튼을 눌러 이전 페이지로 돌아가거나, 다른 항목을 다시 선택해 주세요.
        </p>
        <NavLink to="/guide/components" className="back-link">
          <span className="icon"><SvgArrow /></span>
          <span>다른 컴포넌트 보러가기</span>
        </NavLink>
      </div>
    </StlyeWrap>
  )
}

const StlyeWrap = styled.div`
  .title {
    font-size:24px;
    & + .txt {
      margin-top: 20px;
    }
  }
  .txt { 
    margin-top:10px;
  }
  .back-link {
    display:flex;
    align-items:center;
    gap:5px;
    margin-top:10px;
    .icon{
      display:inline-block;
      width:25px;
      height:25px;
    }
  }
`;