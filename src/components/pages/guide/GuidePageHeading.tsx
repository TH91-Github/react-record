import { useGuideLocation } from "hooks/guide/useGuideHook";
import { capitalizeWords } from "utils/textUtils";

interface GuidePageHeadingPropsType {
  children?: React.ReactNode;
}
export const GuidePageHeading = ({children}:GuidePageHeadingPropsType) => {
  const {locationData} = useGuideLocation();
  return (
    <div className="guide-header">
      <div className="header-inner">
        <div className="headding">
          <h2 className="name-tag">{capitalizeWords(locationData?.path ?? 'category')}</h2>
        </div>
        {children}
      </div>
    </div>
  ) 
}