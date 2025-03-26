import { breakpoints, shadow } from "assets/style/Variable";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const PrinciplesPage = () => {
  return (
    <StyleWrap>
      <Outlet />
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .header-wrap{
    ${shadow.base};
    .title {
      margin-top:30px;
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
  .header-inner, .content-inner{
    overflow:hidden;
    max-width:${breakpoints.tab}px;
    margin:0 auto;
    padding:30px;
  }
`;