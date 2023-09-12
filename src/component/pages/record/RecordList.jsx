import React, { useCallback, useEffect, useState } from "react";
import { RecordRouter } from "./routers/RecordRouter";
import { useNavigate } from "react-router-dom";

// component
import Search from "component/common/Search";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";
import Banner from "component/styled/common/Banner";



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
    <div className="record__wrap">
      <Banner $center>
        <TitleBar fontSize="32px">
          {recordData[0].title}
        </TitleBar>
      </Banner>
      <S.BoxWrap className="search">
        <S.BoxInner $padding="30px 0" className="search__wrap">
          <S.BoxFlex  $direction="row-reverse">
            <div className="search__inner">
              <Search placeholder="준비 중입니다..." btnText="확인" />
            </div>
          </S.BoxFlex>
        </S.BoxInner>
      </S.BoxWrap>
      
      

      <S.BoxInner>
        <div className="search__wrap">
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
          <div className="record__cont__inner">
            <ul className="record__list">
              {
                recordData.map((item,idx) => 
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