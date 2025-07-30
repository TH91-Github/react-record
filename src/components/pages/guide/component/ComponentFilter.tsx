import { TabBtns } from "components/common/TabBtns";
import { SearchModule } from "components/modules/SearchModule";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ComponentsDataType } from "types/guide";

interface ComponentFilterPropsType {
  data: ComponentsDataType[]; 
  changeEvent?: (val:string) => void;
}
export const ComponentFilter = ({
  data, changeEvent
}: ComponentFilterPropsType ) => {
  const [activeTab, setActiveTab] = useState('');
  const tabFilter = [...new Set(data.map(item => item.category))]
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
        placeholder="컴포넌트를 검색해보세요"
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