import { breakpoints, colors } from "../variables";

// 특정 요소 공통 style  
export const guideStyle = `
  .header-inner{
    overflow:hidden;
    max-width:${breakpoints.tablet}px;
    margin:0 auto;
    padding:30px;
  }
  .content-wrap{
    overflow:hidden;
    max-width:${breakpoints.tablet}px;
    margin:0 auto;
    padding:30px;
  }
  .content-heading{
    .bullet-lists{
      margin-top:20px;
    }
  }
  .section-wrap{
    margin-top:30px;
    border-top: 1px solid ${colors.lineBlack};
  }
  .section-item {
    margin-top:30px;
    .desc{
      margin-top:10px;
    }
  }
`;