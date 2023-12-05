import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GuideRouter } from './routers/GuideRouter';
import TitleBar from "component/common/TitleBar";
import Search from "component/common/Search";
// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";

function GuideList() {
  const navi = useNavigate();
  const isMobile = useSelector((state) => state.mobileChk);
  // component Guide list 
  const [guideData, setGuideData] = useState([]);
  const fliterList = (selectName) => { // 보여지는 리스트 구별
    const changeData = [...GuideRouter];
    const viewList = changeData.filter(item => item.view && item);
    const selectList = viewList.filter(item => {
      return selectName === undefined || selectName === ''
      ? item
      : item.keyWord.toLowerCase().includes(selectName.toLowerCase())
    });
    // 선별된 리스트가 없을 경우 view true 전체 노출 - all
    selectList.length > 0 ? setGuideData(selectList)
    : setGuideData(viewList)
  }
  
  const dataLoad = useCallback(() => {
    // data 구조 만들고 -> fetch 사용 예정. 
    fliterList();
  },[]);
  useEffect(() => { 
    dataLoad(); // 임시 데이터 recordData
  },[dataLoad])

  const searchResult = (searchVale) => {
    fliterList(searchVale);
  };
  return (
    <div className="guide">
      <S.GuideSearch>
        <S.GuideSearchInner>
          <Search propsEvent={searchResult}/>
        </S.GuideSearchInner>
      </S.GuideSearch>
      <S.GuideLineWrap $top $borderWidth="5px">
        <SC.ContBoxInner className="guide__inner">
          <S.GuideListWrap className="guide__lists">
            {
              guideData && guideData.map((guideList,idx) => (
                <S.GuideList className="guide__lists-item" key={idx}>
                  <SC.LineTitle>
                    <S.GuideListBtn type="button" title={`${guideList.title} 자세히 보기`} onClick={() =>{navi(guideList.path)}}>
                      <TitleBar $display="inline-block" $fontSize={!isMobile ? `16px` : `14px`}>{guideList.title}</TitleBar>
                      <S.GuideListText className="text">{guideList.desc}</S.GuideListText>
                    </S.GuideListBtn>
                  </SC.LineTitle>
                </S.GuideList>
              ))
            }
          </S.GuideListWrap>
        </SC.ContBoxInner>
      </S.GuideLineWrap>
    </div>
  )
}
export default GuideList;