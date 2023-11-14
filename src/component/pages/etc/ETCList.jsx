import { useState } from "react";
import Banner from "component/common/Banner";
import { ETCRouter } from "./routers/ETCRouter";
import TitleBar from "component/common/TitleBar";
import Search from "component/common/Search";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/etc/styled/ETCStyled";
import { colors } from "component/styled/common/Variable";



// etc 하위 메뉴 관리 노출 및 이동 담당
function ETCList () {
  const [etcData, setEtcData] = useState([]);
  const [selectTitle, setSelectTitle] = useState("All");
  
  const fliterList = (selectName) => { // 보여지는 리스트 구별
    const changeData = [...ETCRouter];
    const viewList = changeData.filter(item => item.view && item);
    const selectList = viewList.filter(item => {
      return selectName === undefined || selectName === ''
      ? item
      : item.keyWord.toLowerCase().includes(selectName.toLowerCase())
    });
    // 선별된 리스트가 없을 경우 view true 전체 노출 - all
    selectList.length > 0 ? setEtcData(selectList)
    : setEtcData(viewList)
  }

  const searchResult = (searchVale) => {
    fliterList(searchVale, "key");
  };

  return (
    <div className="etc">
      <Banner $center $align="center">
        <TitleBar $fontSize="32px" $color={colors.baseWhite}>
          ETC. - {selectTitle}
        </TitleBar>
        <p className="txt">테스트</p>
      </Banner>
      <S.ETCSearch>
        <S.ETCSearchInner>
          <Search propsEvent={searchResult}/>
        </S.ETCSearchInner>
      </S.ETCSearch>
    </div>
  )
}

export default ETCList;