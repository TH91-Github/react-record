import { bgShadow } from "assets/style/variables";
import { ComponentsLists } from "components/pages/guide/components/ComponentsLists";
import { ComponentFilter } from "components/pages/guide/components/ComponentFilter";
import { componentsData } from "components/pages/guide/data/componentsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TitleHeading } from "components/ui/TitleHeading";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const ComponentsPage = () => {
  const [filter, setFilter] = useState('');
  
  const selectUpdate = (selected:string) => {
    // -1 : All , 그 외 value
    setFilter(selected === 'All' ? '': selected)
  }

  const filterLists = useMemo(() => {
    return !filter ? componentsData : componentsData.filter(item => item.category === filter)
  }, [filter]);

  return (
    <StyleWrap>
      <GuidePageHeading />
      <div className="content-wrap">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText={'Components System'} 
          pointer="underline"
          $fontSize={28}
          desc={['팝업, 검색, 리스트 등 컴포넌트 모음']}
        />
        <div className="section-wrap">
          <ComponentFilter 
            data={componentsData}
            changeEvent={selectUpdate}
          />
          <ComponentsLists data={filterLists} />
          <div>
            <Outlet />
          </div>
        </div>
      </div>    
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .componetns-lists{
    margin-top:20px;
    & > ul {
      display: flex;
      flex-wrap: wrap;
    }
    .empty-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
      height:300px;
      border-radius:10px;
      box-shadow:${bgShadow.base};
    }
  }
`;