import { bgShadow, breakpoints, media } from "assets/style/variables";
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
  .principles-header {
    box-shadow:${bgShadow.base};
  }
  .principles-inner{
    padding:30px;
    max-width:${breakpoints.tablet}px;
    margin:0 auto;
    .title {
      margin-top:20px;
      & > span {
        display:block;
        font-size:32px;
        line-height:40px;
      }
    }
    .desc {
      margin-top:20px;
      & > span{
        display:block;
      }
    }
  }
  ${media.mo} {
    .principles-inner{
      padding:30px 20px;
      .heading{
        text-align:center;
      }
      .title {
        margin-top:15px;
        & > span {
          font-size:24px;
          line-height:32px;
        }
      }
      .desc {
        margin-top:15px;
        & > span{
          display:block;
          font-size:14px;
        }
      }
    }
  }
`;