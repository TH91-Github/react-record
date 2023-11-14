import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuideRouter } from './routers/GuideRouter';
import TitleBar from "component/common/TitleBar";
import Search from "component/common/Search";
// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import styled from 'styled-components';
import { media } from 'component/styled/common/Variable';

function GuideList() {
  const navi = useNavigate();
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
    <div className="guid">
      <S.GuideSearch>
        <S.GuideSearchInner>
          <Search propsEvent={searchResult}/>
        </S.GuideSearchInner>
      </S.GuideSearch>
      <S.GuideLineWrap $top  $borderWidth="5px">
        <SC.ContBoxInner className="guid__inner">
          <SC.DivFlex $direction="column" $gap={15}>
            {
              guideData && guideData.map((etcList,idx) => (
                <div className="guid-List" key={idx}>
                  <SC.LineTitle>
                    <S.GuideListBtn type="button" title={`${etcList.title} 자세히 보기`} onClick={() =>{navi(etcList.path)}}>
                      <TitleBar $display="inline-block">{etcList.title}</TitleBar>
                      <S.GuideTxt className="text" $margin="0 0 0 20px;">{etcList.desc}</S.GuideTxt>
                    </S.GuideListBtn>
                  </SC.LineTitle>
                </div>
              ))
            }
          </SC.DivFlex>
        </SC.ContBoxInner>
      </S.GuideLineWrap>

    </div>
  )
}
export default GuideList;