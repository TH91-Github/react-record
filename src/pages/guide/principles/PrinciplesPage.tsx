import { breakpoints, shadow } from "assets/style/variables";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const PrinciplesPage = () => {
  return (
    <StyleWrap className="principles">
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .header-wrap{
    box-shadow:${shadow.base};
    .title {
      margin-top:20px;
      & > span {
        display:block;
        font-size:32px;
        line-height:1.3;
      }
    }
    .desc {
      margin-top:20px;
      & > span{
        display:block;
        line-height:1.5;
      }
    }
  }
  
`;