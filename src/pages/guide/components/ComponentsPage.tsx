import { bgShadow } from "assets/style/variables";
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
  const [returnFocusID, setReturnFocusID] = useState<string | null>(null);

  // ⭐ 포커스 진행해야함
  // 직접 접근과 리스트에서 접근 시 animation 차이
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

  const selectUpdate = (selected:string) => { // -1 : All , 그 외 value
    setFilter((selected === '전체') || (selected === 'All') ? '': selected)
  }
  const viewUpdate = (pathID:string) => {
    console.log('뷰')
    setReturnFocusID(pathID); // 클릭한 아이템 ID 저장

    const el = document.querySelector(`button[data-id="${pathID}"]`);
    if (el instanceof HTMLElement) {
      console.log(el)
      beforeFocus(el);
    }
    
    navigate(`view/${pathID}`);
  }

  const filterLists = useMemo(() => {
    return !filter ? componentsData : componentsData.filter(item => item.category === filter)
  }, [filter]);

  return (
    <>
      { !id ? (
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
              <div className="section-item">
                <ComponentFilter 
                  data={componentsData}
                  changeEvent={selectUpdate}
                />
                <ComponentsLists 
                  data={filterLists}
                  clickEvent={viewUpdate}
                />
              </div>
            </div>
          </div>
        </StyleWrap>
      ) : (
        <Outlet context={{ id, detailsAni }}/>
      )}
    </>
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