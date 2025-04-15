import { breakpoints, colors } from "../variables";

// 특정 요소 공통 style  
export const guideStyle = `
  .hadeer-inner{
    overflow:hidden;
    max-width:${breakpoints.tablet}px;
    margin:0 auto;
    padding:30px 30px 0;
  }
  .content-wrap{
    overflow:hidden;
    max-width:${breakpoints.tablet}px;
    margin:0 auto;
    padding:30px;
  }
  .section-wrap{
    margin-top:30px;
    border-top: 1px solid ${colors.lineBlack};
  }
  .section-item {
    margin-top:30px;
    .desc{
      margin-top:15px;
      & + .desc {
        margin-top:8px;
      }
    }
  }
`;