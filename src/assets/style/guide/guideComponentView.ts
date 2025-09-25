import { breakpoints, colors, media } from "../variables";

// view
export const guideComponentView = `
.view-item{
  margin-top:30px;
  padding-top:30px;
  border-top:1px solid ${colors.lineColor};
  .tit{ 
    font-size: 18px;
  }
  &:first-child{
    margin-top:0;
    padding-top:0;
    border-top:none;
  }
}
.example-lists{
  margin-top:15px;
  &.flex{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
  }
  &:not(.flex){
    .example-item {
      display:flex;
      flex-direction: column;;
      gap:10px;
      margin-top:20px;
      &:first-child{ 
        margin-top:0;
        & ~ .example-item{
          padding-top:15px;
          border-top:1px solid ${colors.lineColor};
        }
      }
    }
  }
}
.example-item {
  .s-tit {
    font-size:18px;
  }
}

${media.mo}{
  .view-item{
    margin-top:20px;
    padding-top:20px;
    .tit{ 
      font-size: 18px;
    }
  }
  .example-item {
    .s-tit {
      font-size:16px;
    }
  }
}
`;