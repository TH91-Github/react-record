import { guideComponentsData } from "components/pages/guide/data/componentsData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TabSearchLists } from "components/pages/guide/TabSearchLists";
import { TitleHeading } from "components/ui/TitleHeading";
import { useRestoreFocus } from "hooks/common";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useNavigationType, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stateIsMobile } from "recoilStore/atoms";
import styled from "styled-components";

export const ComponentsPage = () => {
  const navigate = useNavigate();
  const isMobile = useRecoilValue(stateIsMobile);
  const navigationType = useNavigationType();
  const {beforeFocus, resetFocus} = useRestoreFocus();
  const { id } = useParams<{ id?: string }>();
  const [detailsAni, setDetailsAni] = useState<boolean | null>(null);

  const handleItemClick = (pathID:string) => {
    beforeFocus(pathID);
    navigate(`view/${pathID}`);
  }

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
    <StyleWrap className="component-page">
      <GuidePageHeading />
      <div className="content-wrap full">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText="Components System"
          pointer="underline"
          $fontSize={isMobile? 24 : 28}
          desc={['팝업, 검색, 리스트 등 컴포넌트 모음']}
        />
        <div className="section-wrap">
          <div className="section-item">
            <TabSearchLists 
              data={guideComponentsData}
              searchPlaceholder={'컴포넌트를 검색해주세요.'}
              clickEvent={handleItemClick}
            />
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
.title-heading{
  padding:0 30px;
}
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