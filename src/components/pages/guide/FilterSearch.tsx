import { media } from "assets/style/variables";
import { TabBtns } from "components/common/TabBtns";
import { SearchModule } from "components/modules/SearchModule";
import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { stateIsMobile } from "recoilStore/atoms";
import styled from "styled-components"
import { GuideFilterDataType } from "types/guide";

interface FilterSearchPropsType{
  data: GuideFilterDataType[];
  searchPlaceholder?: string;
  changeEvent?: (ID:string) => void;
}
export const FilterSearch = ({
  data, searchPlaceholder,
  changeEvent, 
}:FilterSearchPropsType) =>{
  const isMobile = useRecoilValue(stateIsMobile);
  const [activeTab, setActiveTab] = useState('');
  const tabFilter = [...new Set(data.map((item:any) => item.category))]

  // 검색 결과
    const onComfirm = useCallback((val: string) => {
      const loweredVal = val.toLowerCase();
      const result = data.find((item) =>
        item.keyword.some((keyVal) => keyVal.toLowerCase() === loweredVal)
      );
      if (result && changeEvent) {
        setActiveTab(result.category)
        changeEvent(result.category)
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
        changeEvent={changeEvent} 
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
    .preview-wrap{
      width:calc(100% - 40px);
    }
  }
}
`;