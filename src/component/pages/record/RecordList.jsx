import React, { useCallback, useEffect, useState } from "react";
import { RecordRouter } from "./routers/RecordRouter";
import { useNavigate } from "react-router-dom";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";

// Record 하위 메뉴 관리 노출 및 이동 담당
function RecordList () {
  const navi = useNavigate();
  const [recordData, setRecordData] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectTab, setSelectTab] = useState("All");

  const dataLoad = useCallback(() => {
    // data 구조 만들고 -> fetch 사용 예정. 
    setRecordData(RecordRouter);
    fliterCategory(RecordRouter);
  },[]);

  const fliterCategory = () =>{ // 데이터 기준 카테고리 생성
    const filterList = RecordRouter.reduce((item, {path}) => {
      item.indexOf('All') === -1 && item.push('All');
      if(path !== undefined) {
        const findName = path.split("/")[0]; 
        item.indexOf(findName) === -1 && item.push(findName)
      }
      return item; 
    },[]);
    setCategory(filterList);
  }

  useEffect(() => { 
    dataLoad(); // 임시 데이터 recordData
  },[dataLoad])


  function categoryChange(changeD){ // select category
    console.log("카테고리 체인지")
    setSelectTab(changeD)
  }

  if(!recordData) return;
  return (
    <div className="record__content">
      {
      /* 
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
            {
              category.map((item,idx) => 
                <li className="record__tab-item" key={idx}>
                  <button onClick={()=>categoryChange(item)}>
                    {item}
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
                recordData &&recordData.map((item,idx) => 
                  item.view === true &&
                  <li key={idx}>
                    <button onClick={() =>{navi(item.path)}}>
                      <span className="tit">{item.title} 자세히 보기</span>
                      <span className="desc">{item.desc}</span>
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