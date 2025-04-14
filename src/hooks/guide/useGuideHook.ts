// 📍 guide에서만 사용하는 hook

import { useLocationCurrent } from "hooks/useLocationCustom";
import { useMatchItem } from "hooks/useMatchItem";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";

export const useGuideLocation = () => {
  const { locationItem, locationPath } = useLocationCurrent(GUIDE_LIST, 'id', 1);
  // index 있는 경우 
  const isChildren = locationItem?.children?.[0]; 
  const hasIndex = isChildren && 'index' in isChildren && isChildren.index === true;
  // 비교할 값 
  const findVal = locationPath[locationPath.length - 1];
  const { matchItem } = useMatchItem({
    data: locationItem?.children ?? [],
    idKey: 'id',
    findVal: hasIndex ? `${findVal}-index` : findVal // index의 경우 -index id 값 찾기
  });
  // 🔽 data : {...} or undefined 
  return { locationData: locationItem, guideData : matchItem};
};
