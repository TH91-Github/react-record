import { ComponentFilter } from "components/pages/guide/component/ComponentFilter";
import { ComponentsLists } from "components/pages/guide/component/ComponentsLists";
import { componentsData } from "components/pages/guide/data/componentsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TitleHeading } from "components/ui/TitleHeading";
import { useRestoreFocus } from "hooks/common";
import { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useNavigationType, useParams } from "react-router-dom";
import styled from "styled-components";

export const ComponentsPage = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const {beforeFocus, resetFocus} = useRestoreFocus();
  const { id } = useParams<{ id?: string }>();
  const [filter, setFilter] = useState('');
  const [detailsAni, setDetailsAni] = useState<boolean | null>(null);

  const handleFilterChange = (selected:string) => { // -1 : All , 그 외 value
    const isAll = selected === '전체' || selected === 'All';
    setFilter(isAll ? '' : selected);
  }
  const handleComponentClick = (pathID:string) => {
    beforeFocus(pathID);
    navigate(`view/${pathID}`);
  }

  const filterLists = useMemo(() => {
    return filter
      ? componentsData.filter(item => item.category === filter)
      : componentsData;
  }, [filter]);

  // 직접 URL접근과 리스트에서 접근 시 animation 차이
  useEffect(() => {
    if(id){ 
      if (navigationType === 'POP') { // POP : 바로 URL 접근 및 새로고침 시
        setDetailsAni(false);
      } else { // PUSH : 리스트에서 상세페이지
        setDetailsAni(true);
      }
    }else{ // components lists
      setDetailsAni(true);
    }
  }, [id, navigationType]);

  // 포커스 회귀가 필요한 경우 
  useEffect(()=> {
    if(!id){ 
      resetFocus();
    }
  },[id, resetFocus])
  
  if (id) {
    return <Outlet context={{ id, detailsAni }} />;
  }

  return (
    <StyleWrap>
      <GuidePageHeading />
      <div className="content-wrap">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText="Components System"
          pointer="underline"
          $fontSize={28}
          desc={['팝업, 검색, 리스트 등 컴포넌트 모음']}
        />
        <div className="section-wrap">
          <div className="section-item">
            <ComponentFilter
              data={componentsData}
              changeEvent={handleFilterChange}
            />
          </div>
          <div className="section-item">
            <ComponentsLists
              data={filterLists}
              clickEvent={handleComponentClick}
            />
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .section-wrap{
    position:relative;
  }
  .seciton-item{
    &.view-wrap{
      position:relative;
      z-index:2;
      min-height:500px;
      background:#fff;
    }
  }
`;