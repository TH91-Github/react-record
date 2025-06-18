import { colors } from "assets/style/variables";
import { TabBtns } from "components/common/TabBtns";
import { tabBtnsData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import { useState } from "react";
import styled from "styled-components";

export const TabButtonViewPage = () => {
  const tabBtns = ['tab-1','tab-2','tab-3']
  const [tabBtnsVal, setTabBtnsVal] = useState({
    case1:'',
    case2:'',
    case3:'',
    case4:'',
  })
  const handleTabOnChange = (val:string, caseNum:number) => {
    const key = `case${caseNum}`;

    setTabBtnsVal((prev) => ({
      ...prev,
      [key]: val,
    }));
  }
  return(
    <StyleWrap className="view-wrap tab-button">
      <div className="view-item">
        <ViewInfo data={tabBtnsData} />
      </div>
      <div className="view-item">
        <p className="tit">TabBtns 데모</p>
        <div className="example-lists">
          <div className="example-item">
            <TabBtns 
              data={tabBtns} 
              changeEvent={(e) => handleTabOnChange(e, 1)}
            />
            <p className="desc">선택 Tab - <span>{tabBtnsVal.case1}</span></p>
            <p className="desc">기본 : data / changeEvent 함수</p>
          </div>
          <div className="example-item">
            <TabBtns 
              data={tabBtns}
              isAll="en"
              tabType="moving" 
              changeEvent={(e) => handleTabOnChange(e, 2)}
            />
            <p className="desc">선택 Tab - <span>{tabBtnsVal.case2}</span></p>
            <p className="desc">옵션 : isAll="en" / tabType="moving"</p>
          </div>
        </div>
      </div>
      <div className="view-item">
        <ViewCode data={tabBtnsData} />
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
  .example-lists {
    display:flex;
    flex-direction: column;
    margin-top:15px;
  }
  .example-item{
    &:first-child + .example-item{
      margin-top:15px;
      padding-top:15px;
      border-top:1px solid ${colors.lineColor};
    }
    .desc {
      margin-top:10px;
      & > span {
        color: ${colors.mSlateBlue};
      }
    }
  }
`;