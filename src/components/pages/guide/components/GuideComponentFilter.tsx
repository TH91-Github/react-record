import { TabBtns } from "components/common/TabBtns";
import { SearchModule } from "components/modules/SearchModule";
import { useCallback } from "react";
import styled from "styled-components";
import { ComponentsDataType } from "types/guide";

interface GuideComponentFilterPropsType {
  data: ComponentsDataType[]; 
  changeEvent?: ({idx,val}:{idx:number, val:string}) => void;
}
export const GuideComponentFilter = ({
  data, changeEvent
}: GuideComponentFilterPropsType ) => {
  const tabFilter = [...new Set(data.map(item => item.category))]

  // 검색 결과
  const onComfirm = useCallback(()=>{

  },[])
  return (
    <StyleWrap>
      <TabBtns data={tabFilter} changeEvent={changeEvent} />
      <SearchModule 
        data={data}
        placeholder="컴포넌트를 검색해보세요"
        onComfirm={onComfirm}
      />
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  display:flex;
  justify-content: space-between;
  gap:20px;
  margin-top:30px;
  .tab-btns {
    flex-grow:1;
  }
`;