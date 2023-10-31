import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuideRouter } from './routers/GuideRouter';
import TitleBar from "component/common/TitleBar";
import Search from "component/common/Search";
// styled
import * as S from "component/styled/common/AllStyled";
import * as SG from "component/pages/guide/styled/GuideStyled";

function GuideList() {
  const navi = useNavigate();
  // component Guide list 
  const [guideData, setGuideData] = useState([]);
  const fliterList = (selectName) => { // 보여지는 리스트 구별
    const changeData = [...GuideRouter];
    const viewList = changeData.filter(item => item.view && item);
    // const selectList = viewList.filter(item => item.keyWord.indexOf(selectName) > -1 && item);
    const selectList = viewList.filter(item => {
      if(selectName === undefined || selectName === ''){
        return item;
      }else{
        return item.keyWord.toLowerCase().includes(selectName.toLowerCase());
      }
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
    <div>
      <SG.GuideSearch>
        <SG.GuideSearchInner>
          <Search propsEvent={searchResult}/>
        </SG.GuideSearchInner>
      </SG.GuideSearch>
      <S.BoxLine $top  $borderWidth="5px" $paddingTop="30px" className="">
        <S.DivFlex>
          {
            guideData && guideData.map((etcList,idx) => (
              <SG.GuideBoxInner key={idx}>
                <S.LineTitle>
                  <button type="button" title={`${etcList.title} 자세히 보기`} onClick={() =>{navi(etcList.path)}}>
                    <TitleBar $display="inline-block">{etcList.title}</TitleBar>
                    <S.TextS $margin="0 0 0 20px;">{etcList.desc}</S.TextS>
                  </button>
                </S.LineTitle>
              </SG.GuideBoxInner>
            ))
          }
        </S.DivFlex>
      </S.BoxLine>

    </div>
  )
}

export default GuideList;