import { useGuideLocation } from "hooks/guide/useGuideHook";
import styled from "styled-components";
import { formatText } from "utils/character";

interface GuidePageHeadingPropsType {
  children?: React.ReactNode;
}
export const GuidePageHeading = ({children}:GuidePageHeadingPropsType) => {
  const {locationData} = useGuideLocation();
  return (
    <StyleWrap className="header-wrap">
      <div className="header-inner">
        <div className="headding">
          <h2 className="name-tag">{formatText(locationData?.path ?? 'category')}</h2>
        </div>
        {children}
      </div>
    </StyleWrap>
  ) 
}
const StyleWrap = styled.div`
  .header-inner{
    padding: 30px 30px 0; 
  }  
`;