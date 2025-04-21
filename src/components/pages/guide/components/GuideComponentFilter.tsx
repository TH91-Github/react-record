import { TabBtns } from "components/common/TabBtns";
import { SearchModule } from "components/modules/SearchModule";
import { useCallback } from "react";
import styled from "styled-components";

interface GuideComponentFilterPropsType<T extends { category: string, keyword:string }> {
  data: T[];
  changeEvent?: ({idx,val}:{idx:number, val:string}) => void;
}
export const GuideComponentFilter = <T extends { category: string, keyword:string }>({
  data, changeEvent
}: GuideComponentFilterPropsType<T>) => {
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
//  {/* 검색 기능을 여기서 */}
//       {/* detail 페이지 :id */}
//       {/* popup, swiper,  */}

//       {/* 
//       리스트 -> 디테일

//         title:''
//         desc:''
//         스토리북 url
//         code: highlightjs
        
//         케이스별 보여주기
        
//       */}
const StyleWrap = styled.div`
  display:flex;
  justify-content: space-between;
  gap:20px;
  margin-top:30px;
  .tab-btns {
    flex-grow:1;
  }
`;