import { TabBtns } from "components/common/TabBtns";
import { SearchModule } from "components/modules/SearchModule";
import { useCallback, useState } from "react";
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
    <StyleWrap>
      <TabBtns 
        data={tabFilter} 
        activeTab={activeTab || undefined}
        changeEvent={changeEvent} 
      />
      <SearchModule 
        data={data}
        id="components"
        placeholder={searchPlaceholder || '검색해보세요'}
        styleOpt={{$maxWidth:'300px'}}
        onComfirm={onComfirm}
      />
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  display:flex;
  justify-content: space-between;
  gap:20px;
  .tab-btns {
    flex-grow:1;
  }
`;