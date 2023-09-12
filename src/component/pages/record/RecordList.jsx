import React, { useCallback, useEffect, useState } from "react";
import { RecordRouter } from "./routers/RecordRouter";
import { useNavigate } from "react-router-dom";

// component
import Search from "component/common/Search";

// styled
import * as S from "component/styled/common/AllStyled";
import Banner from "component/styled/common/Banner";
import TitleBar from "component/styled/TitleBar";
import Ing from "component/styled/common/Ing";


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
    setSelectTab(changeD);
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
          <Ing>⚠️작업중🚧</Ing>
          <S.BoxFlex  $direction="row-reverse">
            <div className="search__inner">
              <Search placeholder="준비 중입니다..." btnText="확인" />
            </div>
            {/* 
              Record 관련 검색 기능 
              router.desc 구별
            */}
          </S.BoxFlex>
        </S.BoxInner>
      </S.BoxWrap>
      <S.BoxWrap className="record__content">
        <S.BoxInner className="record__inner">
          {/* Tab 컴포넌트 만들기 전 - 틀 */}
          <div className="tab"> 
            <div className="tab__select">
              <ul>
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
            <div className="tab__cont">
              <div className="tab__cont-title">
                <TitleBar>
                  {selectTab}
                </TitleBar>
              </div>
              <div className="tab__cont__inner">
                <ul className="tab__cont__lists">
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
          </div>
        </S.BoxInner>
      </S.BoxWrap>
    </div>
  )
}

export default RecordList;