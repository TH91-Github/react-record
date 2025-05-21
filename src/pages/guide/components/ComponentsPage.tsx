import { bgShadow } from "assets/style/variables";
import { ComponentFilter } from "components/pages/guide/component/ComponentFilter";
import { ComponentsLists } from "components/pages/guide/component/ComponentsLists";
import { componentsData } from "components/pages/guide/data/componentsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TitleHeading } from "components/ui/TitleHeading";
import { useEffect, useMemo, useRef, useState } from "react";
import { Outlet, useNavigate, useNavigationType, useParams } from "react-router-dom";
import styled from "styled-components";

export const ComponentsPage = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const { id } = useParams<{ id?: string }>();
  const [filter, setFilter] = useState('');
  const [detailsAni, setDetailsAni] = useState<boolean | null>(null);
  const [returnFocusID, setReturnFocusID] = useState<string | null>(null);

  useEffect(() => {
    if(id){ // 상세페이지 접근
      if (navigationType === 'POP') { // POP : 바로 URL 접근 및 새로고침 시
        setDetailsAni(false);
      } else { // PUSH : 리스트에서 상세페이지
        setDetailsAni(true);
      }
    }else{ // components lists
      setDetailsAni(true);
      
      if(returnFocusID) {
        setTimeout(() => {
          const buttonElement = document.querySelector(`button[data-id="${returnFocusID}"]`);
          if(buttonElement) {
            (buttonElement as HTMLElement).focus();
          }
        }, 50);
      }
    }
  }, [id, navigationType, returnFocusID]);

  const selectUpdate = (selected:string) => { // -1 : All , 그 외 value
    setFilter(selected === 'All' ? '': selected)
  }
  const viewUpdate = ({id, target}: {id: string, target: HTMLElement}) => {
    setReturnFocusID(id); // 클릭한 아이템 ID 저장
    navigate(`view/${id}`);
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
  .section-item{
    &.view-wrap{
      position:relative;
      z-index:2;
      min-height:500px;
      background:#fff;
    }
  }
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