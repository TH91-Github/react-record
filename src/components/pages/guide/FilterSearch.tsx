import { media } from "assets/style/variables";
import { TabBtns } from "components/common/TabBtns";
import { SearchModule } from "components/modules/SearchModule";
import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { stateIsMobile } from "recoilStore/atoms";
import styled from "styled-components"
import { GuideFilterDataType } from "types/guide/guide";

interface FilterSearchPropsType{
  data: GuideFilterDataType[];
  searchPlaceholder?: string;
  changeEvent?: (data:GuideFilterDataType[]) => void;
}
export const FilterSearch = ({
  data, searchPlaceholder,
  changeEvent, 
}:FilterSearchPropsType) =>{
  const isMobile = useRecoilValue(stateIsMobile);
  const [activeTab, setActiveTab] = useState('');
  const tabFilter = [...new Set(data.map((item:any) => item.category))]

  // 검색 결과
  const onComfirm = useCallback((resultID: string[]) => {
    // ⭐ 개선 필요 기존 기존- string로 검색 개선 후 {id,keyword 값 넘어옴} 
    // 그리고 검색 모듈에서 input 시 동일하게 나오는데 옆에 - id값으로 구별 가능하도록 hover시라던가
    const returnData = data.filter((d) => resultID.includes(d.id))
      console.log(returnData)
    if (resultID && changeEvent) {
      const returnData = data.filter((d) => resultID.includes(d.id))
      console.log(returnData)
      // changeEvent(result)
    }else{
      setActiveTab('');
      //  일치하는 값이 없습니다.
    }
  }, [data, changeEvent]);

  return (
    <StyleWrap className="md-filter-search">
      <TabBtns 
        data={tabFilter} 
        activeTab={activeTab || undefined}
      />
      <SearchModule 
        data={data}
        id="components"
        placeholder={searchPlaceholder || '검색해보세요'}
        styleOpt={{$maxWidth:isMobile ? '100%': '300px'}}
        onComfirm={onComfirm}
      />
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
display:flex;
justify-content: space-between;
gap:20px;
position:relative;
.tab-btns {
  flex-grow:1;
}
${media.tabletMo}{
  flex-direction: column-reverse;
  gap:15px;
}
${media.mo}{
  .tab-btn-wrap{
    padding:0 20px 3px;
  }
  .md-search{ 
    padding:0 20px;
    .preview-text{
      width:calc(100% - 40px);
    }
  }
}
`;