import { colors } from "assets/style/variables";
import { toastData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import { useToast } from "hooks/useToast";
import styled from "styled-components";

export const ToastViewPage = () => {
  const { addToast } = useToast();

  const handleCaseClick = (message?:string, type?:'base' | 'success' | 'error', timer?:number) =>{

    addToast(message, type, timer)
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
              onClick={() => handleCaseClick()}
            >
              <span className="s-tit">Toast - 기본</span>
            </button>
          </div>
          <div className="example-item">
            <button 
              type="button"
              className="btn"
              onClick={() => handleCaseClick('복사를 완료하였습니다.','success')}
            >
              <span className="s-tit">Toast - 성공</span>
            </button>
          </div>
          <div className="example-item">
            <button 
              type="button"
              className="btn"
              onClick={() => handleCaseClick('오류 발생.','error')}
            >
              <span className="s-tit">Toast - 에러</span>
            </button>
          </div>
          <div className="example-item">
            <button 
              type="button"
              className="btn"
              onClick={() => handleCaseClick('5초 후 닫기','base', 5000)}
            >
              <span className="s-tit">Toast - 닫기 시간 제어</span>
            </button>
          </div>
        </div>
      </div>
      <div className="view-item">
        <ViewCode data={toastData} />
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