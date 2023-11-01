import React, { useCallback, useEffect, useState } from "react";
import { RecordRouter } from "./routers/RecordRouter";
import { useNavigate } from "react-router-dom";

// component
import Search from "component/common/Search";
import Banner from "component/common/Banner";
import TitleBar from "component/common/TitleBar";

// styled
import * as S from "component/styled/common/AllStyled";
import * as SR from "component/pages/record/styled/RecordStyled";
import { colors } from "component/styled/common/Variable";


// Record 하위 메뉴 관리 노출 및 이동 담당
function RecordList () {
  const navi = useNavigate();
  const [recordData, setRecordData] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectTab, setSelectTab] = useState("All");

  const dataLoad = useCallback(() => {
    // data 구조 만들고 -> fetch 사용 예정. 
    fliterList();
    fliterCategory(RecordRouter);
  },[]);

  const fliterCategory = () => { // 카테고리 리스트 구별
    const filterList = RecordRouter.reduce((prev, {path, view}) => {
      prev.indexOf('All') === -1 && prev.push('All');
      if(path !== undefined && view === true) {
        const findName = path.split("/")[0];
        prev.indexOf(findName) === -1 && prev.push(findName);
      }
      return prev;
    },[]);
    setCategory(filterList);
  }
  const fliterList = (selectName, type) => { // 보여지는 리스트 구별
    const changeData = [...RecordRouter];
    const viewList = changeData.filter(item => item.view && item);
    const selectList = viewList.filter(item => {
      return type === "key" 
       ? 
        selectName === undefined || selectName === '' 
        ? item
        : item.keyWord.toLowerCase().includes(selectName.toLowerCase())
       : item.path.indexOf(selectName) > -1 && item
    });
    // 선별된 리스트가 없을 경우 view true 전체 노출 - all
    console.log(selectList)
    selectList.length > 0 
    ? setRecordData(selectList)
    : setRecordData(viewList)
  }

  useEffect(() => { 
    dataLoad(); // 임시 데이터 recordData
  },[dataLoad])

  const categoryChange = (changeD) => { // 카테고리 클릭 시
    setSelectTab(changeD);
    fliterList(changeD);
  }
  const searchResult = (searchVale) => {
    fliterList(searchVale, "key");
  };
  if(!recordData) return;
  return (
    <div className="record">
      <Banner $center $align="center">
        <TitleBar $fontSize="32px" $color={colors.baseWhite}>
          Record - {selectTab}
        </TitleBar>
        <p className="txt">Velog, 예제, 메모장 정보 등 기록을 정리한 페이지</p>
      </Banner>
      <SR.RecordSearch>
        <SR.RecordSearchInner>
          <Search propsEvent={searchResult}/>
        </SR.RecordSearchInner>
      </SR.RecordSearch>

      <S.BoxLine $top $borderWidth="5px" $paddingTop="30px">
        <S.ContBoxInner className="record__inner">
          {/* Tab 컴포넌트 만들기 전 - 틀 */}
          <div className="tab"> 
            <div className="tab__select">
              <ul className="tab__lists">
                {
                  category.map((item,idx) => 
                    <li className="tab__lists-item" key={idx}>
                      <button type="button" className="btn" onClick={()=>categoryChange(item)}>
                        {item}
                      </button>
                    </li>
                  )
                }
              </ul>
            </div>
            
            <div className="tab__cont">
              <div className="tab__cont-title">
                <TitleBar $fontWeight="600">
                  {selectTab}
                </TitleBar>
              </div>
              <div className="tab__cont__inner">
                <ul className="tab__cont__lists">
                  {
                    recordData.map((item,idx) => 
                      item.view === true &&
                      <li key={idx} className="tab__cont__lists-item">
                        <button type="button" className="btn" title="자세히 보기" onClick={() =>{navi(item.path)}}>
                          <span className="order">{idx+1}</span>
                          <span className="tit">{item.title}</span>
                          <span className="desc">{item.desc}</span>
                        </button>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </S.ContBoxInner>
      </S.BoxLine>
    </div>
  )
}

export default RecordList;