import { colors } from "assets/style/variables";
import { toastData } from "components/pages/guide/data/componentsInfo";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import styled from "styled-components";

export const ToastViewPage = () => {
  const handleCase1Click = () =>{
    console.log('d')
  }

  return(
    <StyleWrap className="view-wrap tab-button">
      <div className="view-item">
        <ViewInfo data={toastData} />
      </div>
      <div className="view-item">
        <p className="tit">Toast 데모</p>
        <div className="example-lists">
          <div className="example-item">
            <button 
              type="button"
              className="btn"
              onClick={handleCase1Click}
            >
              <span>Toast - 1</span>
            </button>
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
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
    display:flex;
    gap:10px;
    margin-top:15px;
  }
  .example-item {
    
  }
`;