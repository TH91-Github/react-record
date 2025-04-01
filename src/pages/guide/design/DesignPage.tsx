import { GuideHeading } from "components/pages/guide/GuideHeading";
import { useLocationCurrent } from "hooks/useLocationCustom";
import { useMatchItem } from "hooks/useMatchItem";
import { Outlet } from "react-router-dom";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

export const DesignPage = () => {

  const {locationItem, locationPath}= useLocationCurrent(GUIDE_LIST, 'id', 1);
  const { matchItem } = useMatchItem({
    data:locationItem?.children ?? [],
    idKey: 'id', 
    findVal: locationPath[locationPath.length-1]
  });

  return (
    <StyleWrap>
      <GuideHeading category={locationItem ? locationItem.path : 'category'}>
        <h3 className="title">
          {matchItem?.title} 
          <span className="color">{matchItem?.id}</span>
        </h3>
      </GuideHeading>
      <Outlet />    
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;