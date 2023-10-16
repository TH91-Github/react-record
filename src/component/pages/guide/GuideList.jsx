import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuideRouter } from './routers/GuideRouter';
import TitleBar from "component/common/TitleBar";
// styled
import * as S from "component/styled/common/AllStyled";

function GuideList() {
  const navi = useNavigate();
  // component Guide list 
  const [guideData, setGuideData] = useState([]);
  const fliterList = (selectName) => { // 보여지는 리스트 구별
    const changeData = [...GuideRouter];
    const viewList = changeData.filter(item => item.view && item);
    const selectList = viewList.filter(item => item.path.indexOf(selectName) > -1 && item);
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

  return (
    <>
      {
        guideData && guideData.map((etcList,idx) => (
          <S.BoxInner $margin="30px auto 0" $padding="0 30px" key={idx}>
            <div className="guide__top">
              <button type="button" title={`${etcList.title} 자세히 보기`} onClick={() =>{navi(etcList.path)}}>
                <TitleBar $display="inline-block">{etcList.title}</TitleBar>
                <S.TextS $margin="0 0 0 20px;">{etcList.desc}</S.TextS>
              </button>
            </div>
            {/* <button type="button" className="btn" title="자세히 보기" onClick={() =>{navi(item.path)}}></button> */}
          </S.BoxInner>
        ))
      }
    </>
  )
}

export default GuideList;