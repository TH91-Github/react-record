// 📍 guide에서만 사용하는 hook

import { useLocationCurrent } from "hooks/useLocationCustom";
import { useMatchItem } from "hooks/useMatchItem";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";

export const useGuideLocation = () => {
  const { locationItem, locationPath } = useLocationCurrent(GUIDE_LIST, 'id', 1);
  const { matchItem } = useMatchItem({
    data: locationItem?.children ?? [],
    idKey: 'id',
    findVal: locationPath[locationPath.length - 1]
  });
  // 🔽 data : {...} or undefined 
  return { locationData: locationItem, guideData : matchItem};
};
