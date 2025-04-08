import { bgShadow } from "assets/style/variables";
import { useGuideLocation } from "hooks/guide/useGuideHook";
import styled from "styled-components";
import { formatText } from "utils/character";

interface GuidePageHeadingPropsType {
  children?: React.ReactNode;
}
export const GuidePageHeading = ({children}:GuidePageHeadingPropsType) => {
  const {locationData, guideData} = useGuideLocation();
  return (
    <StyleWrap className="header-wrap">
      <div className="header-inner">
        <div className="headding">
          <h2 className="name-tag">{formatText(locationData?.path ?? 'category')}</h2>
          <p className="tit">
            <span>{guideData?.title}</span>
            <span className="color">{formatText(guideData?.id ?? 'guide')}</span>
          </p>
        </div>
        {children}
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  box-shadow:${bgShadow.base};
  .tit {
    margin-top:20px;
    font-size:24px;
  }
  .color{
    margin-left:10px;
    font-size:20px;
  }
`;