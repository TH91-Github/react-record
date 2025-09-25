import { breakpoints, colors, media } from "../variables";

// 특정 요소 공통 style  
export const guideStyle = `
.header-inner{
  overflow:hidden;
  max-width:${breakpoints.tablet}px;
  margin:0 auto;
  padding:30px 30px 0;
}
.content-wrap{
  max-width:${breakpoints.tablet}px;
  margin:0 auto;
  padding:30px;
  &.full{
    padding:30px 0;
    .title-heading{
      padding:0 30px;
    }
    .section-wrap{
      position:relative;
      border-top:none;
      padding-top:1px;
      &::before{
        position:absolute;
        top:0;
        left:50%;
        width:calc(100% - 60px);
        height:1px;
        background:${colors.lineBlack};
        transform: translateX(-50%);
        content:'';
      }
    }
    .md-filter-search{
      padding:0 30px;
    }
    .filter-lists{
      padding:0 30px;
    }
  }
}
.section-wrap{
  margin-top:30px;
  border-top: 1px solid ${colors.lineBlack};
}
.section-item {
  margin-top:30px;
  & > .desc{
    margin-top:15px;
    & + .desc {
      margin-top:8px;
    }
  }
}
${media.mo}{
  .header-inner{
    padding:30px 20px 0;
  }
  .content-wrap{
    padding: 15px 20px;
    &.full{
      padding:15px 0;
      .title-heading{
        padding:0 20px;
      }
      .section-wrap{
        &::before{
          width:calc(100% - 40px);
        } 
      } 
      .md-filter-search{
        padding:0;
      }
      .filter-lists{
        padding:0 20px 5px;
      }
    }
  }
  .section-wrap{
    margin-top:20px;
  }
  .section-item {
    margin-top:20px;
  }
}
`;