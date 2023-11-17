import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleBar from "component/common/TitleBar";
import Search from "component/common/Search";
import { ETCRouter } from "./routers/ETCRouter";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/etc/styled/ETCStyled";

// etc 하위 메뉴 관리 노출 및 이동 담당
function ETCList () {
  const navi = useNavigate();
  const [etcData, setEtcData] = useState([]);
  
  const fliterList = (selectName) => { // 보여지는 리스트 구별
    const changeData = [...ETCRouter];
    const viewList = changeData.filter(item => item.view && item);
    const selectList = viewList.filter(item => {
      return selectName === undefined || selectName === ''
      ? item
      : item.keyWord.toLowerCase().includes(selectName.toLowerCase())
    });
    // 선별된 리스트가 없을 경우 view true 전체 노출 - all
    console.log(selectList)
    console.log(viewList)
    selectList.length > 0 ? setEtcData(selectList)
    : setEtcData(viewList)
  }

  const dataLoad = useCallback(() => {
    // data 구조 만들고 -> fetch 사용 예정. 
    fliterList();
  },[]);
  useEffect(() => { 
   dataLoad(); // 임시 데이터 
  },[dataLoad])

  const searchResult = (searchVale) => {
    fliterList(searchVale, "key");
  };

  return (
    <div className="etc">
      <S.ETCSearch>
        <S.ETCSearchInner>
          <Search propsEvent={searchResult}/>
        </S.ETCSearchInner>
      </S.ETCSearch>
      <S.ETCLineWrap $top $borderWidth="5px">
        <SC.ContBoxInner>
          <S.ETCListWrap>
            {
              etcData && etcData.map((etcList,idx) => (
                <div key={idx}>
                  <S.ETCTitleList title={`${etcList.title} 자세히 보기`} onClick={() =>{navi(etcList.path)}}>
                      <TitleBar $display="inline-block">{etcList.title}</TitleBar>
                      <S.ETCListText className="text">{etcList.desc}</S.ETCListText>
                  </S.ETCTitleList>
                </div>
              ))
            }
          </S.ETCListWrap>
        </SC.ContBoxInner>
      </S.ETCLineWrap>
    </div>
  )
}

export default ETCList;