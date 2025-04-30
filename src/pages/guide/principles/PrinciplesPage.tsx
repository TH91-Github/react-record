import { bgShadow, breakpoints } from "assets/style/variables";
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
    box-shadow:${bgShadow.base};
    .header-inner{
      padding:30px;
      max-width:${breakpoints.tablet}px;
      margin:0 auto;
    }
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