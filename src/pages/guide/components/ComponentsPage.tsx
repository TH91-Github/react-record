import { bgShadow } from "assets/style/variables";
import { ComponentFilter } from "components/pages/guide/component/ComponentFilter";
import { ComponentsLists } from "components/pages/guide/component/ComponentsLists";
import { componentsData } from "components/pages/guide/data/componentsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TitleHeading } from "components/ui/TitleHeading";
import { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useNavigationType, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { prevFocus } from "recoil/atoms";
import styled from "styled-components";

export const ComponentsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [detailsAni, setDetailsAni] = useState<boolean | null>(null);
  const navigationType = useNavigationType();
  const { id } = useParams<{ id?: string }>();
  const [isClosing, setIsClosing] = useState(false);
  const [prevFocusEl, setPrevFocus] = useRecoilState(prevFocus);
  
  useEffect(() => {
    if(id){ // 상세페이지 접근
      if (navigationType === 'POP') { // POP : 바로 URL 접근 및 새로고침 시
        setDetailsAni(false);
      } else { // PUSH : 리스트에서 상세페이지
        console.log('일반')
        setDetailsAni(true);
      }
    }else{ // components lists
      setDetailsAni(true);
    }
  }, [id, navigationType]);

  const selectUpdate = (selected:string) => {
    // -1 : All , 그 외 value
    setFilter(selected === 'All' ? '': selected)
  }

  const filterLists = useMemo(() => {
    return !filter ? componentsData : componentsData.filter(item => item.category === filter)
  }, [filter]);

  const handleClosedClick = () => {
    if (isClosing) return;
    setIsClosing(true); // 중복 클릭 방지

    setTimeout(() => {
      navigate('/guide/components');
      if (prevFocusEl) {
        prevFocusEl.focus();
      }
      setPrevFocus(null);
      setIsClosing(false);
    }, 400); // .3s fade-out 끝난 후
  }
  useEffect(() => {
    return () => setIsClosing(false);
  }, []);

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
          <div className={`section-item ${id ? 'hidden':''}`}>
            <ComponentFilter 
              data={componentsData}
              changeEvent={selectUpdate}
            />
            <ComponentsLists data={filterLists} />
          </div>
          { id && (
            <div className={`section-item view-wrap ${detailsAni? 'ani':''} ${isClosing?'fade-out':''}`}>
              <Outlet context={{ id, detailsAni }}/>
              <button 
                className="close-btn fade-up"
                onClick={handleClosedClick}
              >
                <span>닫기</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .section-wrap{
    position:relative;
  }
  .section-item{
    &:not(.view-wrap){
      transition: opacity var(--transition);
    }
    &.hidden {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      user-select: none;
      pointer-events:none;
      opacity:0;
    }
    &.view-wrap{
      position:relative;
      z-index:2;
      min-height:500px;
      background:#fff;
    }
    &.ani {

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