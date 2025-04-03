import { shadow } from "assets/style/variables";
import { useGuideLocation } from "hooks/guide/useGuideHook";
import styled from "styled-components";
import { formatText } from "utils/character";

interface GuideHeadingPropsType {
  children?: React.ReactNode;
}
export const GuideHeading = ({children}:GuideHeadingPropsType) => {
  const {locationData, guideData} = useGuideLocation();
  return (
    <StyleWrap className="header-wrap">
      <div className="header-inner">
        <div className="headding">
          <h2 className="name-tag">{formatText(locationData?.path ?? 'category')}</h2>
          <h3 className="title">
            <span>{guideData?.title}</span>
            <span className="color">{formatText(guideData?.id ?? 'guide')}</span>
          </h3>
        </div>
        {children}
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  box-shadow:${shadow.base};
  .title {
    margin-top:20px;
    font-size:24px;
  }
  .color{
    margin-left:10px;
    font-size:20px;
  }
`;