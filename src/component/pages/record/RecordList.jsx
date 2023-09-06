import React, { useState } from "react";
import { RecordRouter } from "./routers/RecordRouter";
import { useNavigate } from "react-router-dom";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";

// Record 하위 메뉴 관리 노출 및 이동 담당
function RecordList () {
  const navi = useNavigate();
  const [recordData, setRecordData] = useState(RecordRouter);
  const [selectTab, setSelectTab] = useState("All");
   
  
  function categoryChange(){
    console.log("카테고리 체인지")
  }
  return (
    <div className="record__content">
      {/* 
        현재는 임시로 보여주는 단계 진행.
        리스트 CSS 컴포넌트 제작

        상단 카테고리별 슬라이드 및 목록 제공
        하단 해당 리스트 All, type1, type2 ...
      */}
      <S.BoxInner>
        <div>
          <TitleBar>
            {recordData[0].title}
          </TitleBar>
          <div className="search">
            {/* 
              Record 관련 검색 기능 
              router.desc 구별
            */}
          </div>
        </div>
        <div className="record__tab">
          <ul className="record__tab-list">
            <li className="record__tab-item">
              <button type="button">All</button>
            </li>
            {
              recordData.map((item,idx) => 
                item.view === true &&
                <li className="record__tab-item" key={idx}>
                  <button onClick={categoryChange}>
                    {item.title}
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div className="record__cont">
          <TitleBar>
            {selectTab}
          </TitleBar>
          <div className="record__cont__list">
            <ul>
              {
                recordData.map((item,idx) => 
                  item.view === true &&
                  <li key={idx}>
                    <button onClick={() =>{navi(item.path)}}>
                      {item.title} 이동하기
                    </button>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </S.BoxInner>
    </div>
  )
}

export default RecordList;